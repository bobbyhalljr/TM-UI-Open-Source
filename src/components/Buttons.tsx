// components/Buttons.tsx
import React from 'react';
import { CircularLoader } from './Loading';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'disabled' | 'loading' | 'lg' | 'md' | 'sm';
  style?: 'solid' | 'outline' | 'ghost';
  className?: string;
  color?: string;
}

// Define button styles for each variant and style
const buttonStyles: any = {
  primary: {
    solid: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border-2 bg-transparent border-gray-400 text-gray-500 hover:border-gray-500',
    ghost: 'border-2 border-gray-300 hover:shdaow-md bg-transparent text-blue-500',
  },
  secondary: {
    solid: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    outline: 'border-2 bg-transparent border-gray-500 text-gray-500 hover:bg-gray-100',
    ghost: 'border-2 border-gray-300 hover:shdaow-md bg-transparent text-gray-500',
  },
  accent: {
    solid: 'bg-emerald-400 hover:bg-emerald-500 text-white',
    outline: 'border-2 bg-transparent border-emerald-400 text-emerald-400 hover:bg-emerald-100',
    ghost: 'border hover:border-gray-300 hover:shdaow-md bg-transparent text-emerald-400',
  },
  disabled: {
    solid: 'bg-gray-300 text-gray-400 cursor-not-allowed',
    outline: 'border-2 bg-gray-300 border-gray-300 text-gray-400 cursor-not-allowed',
    ghost: 'border-2 border-gray-300 bg-gray-300 text-gray-400 cursor-not-allowed',
  },
  loading: {
    solid: 'bg-blue-400 text-white cursor-not-allowed',
    outline: 'border-2 bg-blue-400 border-blue-400 text-white cursor-not-allowed',
    ghost: 'border-2 border-gray-300 bg-blue-400 text-white cursor-not-allowed',
  },
  lg: 'text-2xl',
  md: 'text-xl',
  sm: 'text-xs',
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  children,
  variant = 'primary',
  style = 'solid',
  className = '',
  color,
}) => {
  const baseButtonClasses = 'border m-2 px-6 py-2 text-gray-700 overflow-hidden max-w-3xl rounded-lg focus:outline-none focus:ring focus:ring-gray-300 shadow-sm whitespace-nowrap';
  const sizeClass = buttonStyles[style] || buttonStyles['md']; // Default to medium size if not specified
  const buttonColor = color ? `text-${color}` : '';

  const buttonClasses = `${baseButtonClasses} ${sizeClass} ${buttonStyles[variant][style]} ${buttonColor} ${
    variant === 'disabled' || variant === 'loading' ? 'cursor-not-allowed' : 'cursor-pointer'
  } ${className}`;

  return (
    <>
      {variant === 'loading' ? (
        <button disabled className={buttonClasses} onClick={onClick} type={type}>
          <div className="flex justify-center items-center">
            <div className="mr-3">
              <CircularLoader size={6} />
            </div>
            {children}
          </div>
        </button>
      ) : (
        <button className={buttonClasses} onClick={onClick} type={type} disabled={variant === 'disabled'}>
          {children}
        </button>
      )}
    </>
  );
};
