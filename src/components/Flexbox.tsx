import React, { ReactNode } from 'react';

interface FlexContainerProps {
  children: ReactNode;
  justify?: string;
  align?: string;
  className?: string;
}

export const FlexContainer: React.FC<FlexContainerProps> = ({ children, justify = 'flex-start', align = 'stretch' }) => {
  return <div className={`flex justify-${justify} items-${align}`}>{children}</div>;
};

interface FlexItemProps {
    children: ReactNode;
    grow?: number;
    shrink?: number;
    basis?: string;
    className?: string;
  }
  
const FlexItem: React.FC<FlexItemProps> = ({ children, grow = 0, shrink = 1, basis = 'auto' }) => {
    return <div className={`flex-${grow} flex-shrink-${shrink} flex-basis-${basis}`}>{children}</div>;
};