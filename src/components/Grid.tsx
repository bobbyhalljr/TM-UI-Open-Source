import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  gridCols?: number | string;
  gridRows?: number | string;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ children, gridCols }) => {
  return <div className={`grid grid-cols-${gridCols} gap-4`}>{children}</div>;
};


interface GridItemProps {
    children: ReactNode;
    colSpan?: number | string;
    rowSpan?: number | string;
    gridGap?: number | string;
    className?: string;
  }
  
export const GridItem: React.FC<GridItemProps> = ({ children, colSpan }) => {
    return <div className={`col-span-${colSpan}`}>{children}</div>;
};

// Documentation

// Grid Component (Grid.tsx):
// Props:
// children: ReactNode - The content to be placed within the grid.
// Grid Item Component (GridItem.tsx):
// Props:
// children: ReactNode - The content to be placed within the grid item.
// colSpan: number - The number of columns the item should span.
// Example Usage:
// Import Grid and GridItem components.
// Use Grid as the main container for your layout.
// Place GridItem components within Grid to create columns.
// Adjust the colSpan prop of GridItem to control the number of columns the item spans.