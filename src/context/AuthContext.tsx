'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth as fbAuth, db as fbDb, isFirebaseConfigured } from '@/firebase/config';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'student' | 'parent';
  createdAt: string;
  classLevel?: string; // For students e.g., "Class 8"
  childName?: string; // For parents
  board?: string; // e.g., "AP State Board" | "CBSE Board"
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  isMockUser: boolean;
  signIn: (email: string, password: string) => Promise<UserProfile>;
  signUp: (email: string, password: string, displayName: string, role: 'student' | 'parent', extraInfo?: string, board?: string) => Promise<UserProfile>;
  signOut: () => Promise<void>;
  updateUserExtraInfo: (info: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Pre-seeded mock users database stored in localStorage
const MOCK_USERS_KEY = 'mytut-mock-users-db';
const MOCK_SESSION_KEY = 'mytut-mock-session';

const DEFAULT_MOCK_USERS: Record<string, UserProfile & { passwordHash: string }> = {
  'student@mytut.com': {
    uid: 'mock-uid-student-123',
    email: 'student@mytut.com',
    displayName: 'Aarav Sharma',
    role: 'student',
    classLevel: 'Class 10',
    board: 'AP State Board',
    createdAt: new Date().toISOString(),
    passwordHash: 'password123',
  },
  'parent@mytut.com': {
    uid: 'mock-uid-parent-456',
    email: 'parent@mytut.com',
    displayName: 'Robert Sharma',
    role: 'parent',
    childName: 'Aarav Sharma',
    board: 'AP State Board',
    createdAt: new Date().toISOString(),
    passwordHash: 'password123',
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMockUser, setIsMockUser] = useState(true);

  // Initialize mock DB on startup
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(MOCK_USERS_KEY);
      if (!stored) {
        localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(DEFAULT_MOCK_USERS));
      }
    }
  }, []);

  useEffect(() => {
    if (isFirebaseConfigured && fbAuth) {
      setIsMockUser(false);
      const unsubscribe = onAuthStateChanged(fbAuth, async (fbUser) => {
        if (fbUser) {
          try {
            // Get user profile from Firestore
            const docRef = doc(fbDb, 'users', fbUser.uid);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              setUser(docSnap.data() as UserProfile);
            } else {
              // Fallback default profile if document doesn't exist yet
              const defaultProfile: UserProfile = {
                uid: fbUser.uid,
                email: fbUser.email || '',
                displayName: fbUser.displayName || 'Learner',
                role: 'student',
                createdAt: new Date().toISOString(),
              };
              setUser(defaultProfile);
            }
          } catch (e) {
            console.error('Error fetching Firestore user profiles:', e);
            setUser({
              uid: fbUser.uid,
              email: fbUser.email || '',
              displayName: fbUser.displayName || 'Learner',
              role: 'student',
              createdAt: new Date().toISOString(),
            });
          }
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // Handle Local Storage mock session validation
      setIsMockUser(true);
      const activeSession = localStorage.getItem(MOCK_SESSION_KEY);
      if (activeSession) {
        setUser(JSON.parse(activeSession) as UserProfile);
      }
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string): Promise<UserProfile> => {
    if (isFirebaseConfigured && fbAuth) {
      const credential = await signInWithEmailAndPassword(fbAuth, email, password);
      const docRef = doc(fbDb, 'users', credential.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const profile = docSnap.data() as UserProfile;
        setUser(profile);
        return profile;
      }
      const defaultProfile: UserProfile = {
        uid: credential.user.uid,
        email: credential.user.email || '',
        displayName: credential.user.displayName || 'Learner',
        role: 'student',
        createdAt: new Date().toISOString(),
      };
      setUser(defaultProfile);
      return defaultProfile;
    } else {
      // Mock auth flow
      const mockDb = JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || JSON.stringify(DEFAULT_MOCK_USERS));
      const foundUser = mockDb[email.toLowerCase()];
      if (foundUser && foundUser.passwordHash === password) {
        const { passwordHash, ...profile } = foundUser;
        localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(profile));
        setUser(profile);
        return profile;
      }
      throw new Error('Invalid email or password');
    }
  };

  const signUp = async (
    email: string, 
    password: string, 
    displayName: string, 
    role: 'student' | 'parent',
    extraInfo?: string,
    board: string = 'AP State Board'
  ): Promise<UserProfile> => {
    if (isFirebaseConfigured && fbAuth) {
      const credential = await createUserWithEmailAndPassword(fbAuth, email, password);
      await updateProfile(credential.user, { displayName });
      
      const profile: UserProfile = {
        uid: credential.user.uid,
        email,
        displayName,
        role,
        board,
        createdAt: new Date().toISOString(),
        ...(role === 'student' ? { classLevel: extraInfo || 'Class 8' } : { childName: extraInfo || '' }),
      };

      await setDoc(doc(fbDb, 'users', credential.user.uid), profile);
      setUser(profile);
      return profile;
    } else {
      // Mock auth sign up
      const mockDb = JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || JSON.stringify(DEFAULT_MOCK_USERS));
      if (mockDb[email.toLowerCase()]) {
        throw new Error('An account with this email already exists.');
      }

      const uid = `mock-uid-${Math.random().toString(36).substring(2, 11)}`;
      const profile: UserProfile = {
        uid,
        email,
        displayName,
        role,
        board,
        createdAt: new Date().toISOString(),
        ...(role === 'student' ? { classLevel: extraInfo || 'Class 8' } : { childName: extraInfo || '' }),
      };

      mockDb[email.toLowerCase()] = {
        ...profile,
        passwordHash: password,
      };

      localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(mockDb));
      localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(profile));
      setUser(profile);
      return profile;
    }
  };

  const signOut = async () => {
    if (isFirebaseConfigured && fbAuth) {
      await firebaseSignOut(fbAuth);
      setUser(null);
    } else {
      localStorage.removeItem(MOCK_SESSION_KEY);
      setUser(null);
    }
  };

  const updateUserExtraInfo = (info: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...info };
    setUser(updated);
    if (!isFirebaseConfigured) {
      localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(updated));
      const mockDb = JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || '{}');
      if (mockDb[user.email.toLowerCase()]) {
        mockDb[user.email.toLowerCase()] = {
          ...mockDb[user.email.toLowerCase()],
          ...info,
        };
        localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(mockDb));
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, isMockUser, signIn, signUp, signOut, updateUserExtraInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    return {
      user: null,
      loading: false,
      isMockUser: true,
      signIn: async () => { throw new Error('Auth not ready'); },
      signUp: async () => { throw new Error('Auth not ready'); },
      signOut: async () => {},
      updateUserExtraInfo: () => {},
    };
  }
  return context;
}
