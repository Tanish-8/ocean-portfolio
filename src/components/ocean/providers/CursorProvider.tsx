import React from 'react';

export interface CursorProviderProps {
  children: React.ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default CursorProvider;
