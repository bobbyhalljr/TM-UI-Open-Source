// tm-components/Container.tsx
import React, { ReactNode, HTMLProps } from 'react';

export interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  center?: boolean;
}

export const Container = ({ children, center, className, ...rest }: ContainerProps) => {
  const containerClasses = `container overflow-x-hidden ${
    center ? 'flex flex-wrap justify-center items-center' : ''
  } mx-auto my-12 px-4 sm:px-6 lg:px-8 ${className || ''}`;

  return <div className={containerClasses} {...rest}>{children}</div>;
};
