// components/Tables.tsx
import React from 'react';

interface TableProps {
  headers: string[];
  rows: string[][];
  className?: string;
}

// Basic Table Component
export const BasicTable: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <table className="border-collapse border w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border p-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Striped Rows Table Component
export const StripedRowsTable: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <table className="border-collapse border w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border p-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : ''}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Hover Rows Table Component
export const HoverRowsTable: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <table className="border-collapse border w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border p-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};