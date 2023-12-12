import React from 'react';

interface CircularLoaderProps {
  size?: number;
  className?: string;
}

export const CircularLoader: React.FC<CircularLoaderProps> = ({ size = 8 }) => (
  <div className={`w-${size} h-${size} border-t-4 border-white border-solid rounded-full animate-spin`} />
);