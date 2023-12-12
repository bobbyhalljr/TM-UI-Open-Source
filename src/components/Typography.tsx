// components/Typography.tsx
import React, { ReactNode } from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph' | 'bold' | 'italic' | 'link' | 'blockquote' | 'small';
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  const getTypographyStyle = () => {
    switch (variant) {
      case 'h1':
        return 'text-4xl font-bold py-4 mb-2';
      case 'h2':
        return 'text-3xl font-bold py-4 mb-2';
      case 'h3':
        return 'text-2xl font-bold py-4 mb-2';
      case 'h4':
        return 'text-xl font-bold py-4 mb-1';
      case 'h5':
        return 'text-lg font-bold py-4 mb-1';
      case 'h6':
        return 'text-base font-bold py-4 mb-1';
      case 'paragraph':
        return 'text-base font-medium tracking-wider leading-6 mb-4';
      case 'bold':
        return 'font-bold py-4';
      case 'small':
        return 'text-sm font-medium text-black';
      case 'italic':
        return 'italic text-base leading-6 mb-2';
      case 'link':
        return 'text-blue-500 cursor-pointer text-base font-medium leading-6 mb-4 hover:underline';
      case 'blockquote':
        return 'border-l-4 border-gray-500 pl-4 italic';
      default:
        return '';
    }
  };

  return <div className={getTypographyStyle()}>{children}</div>;
};

export default Typography;
