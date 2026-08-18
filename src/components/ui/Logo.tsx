'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = '', size = 50 }: LogoProps) {
  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="TuT Logo"
        width={size}
        height={size}
        priority
        style={{ width: `${size}px`, height: 'auto' }}
        className="object-contain shrink-0"
      />
    </div>
  );
}
