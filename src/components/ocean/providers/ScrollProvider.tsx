import React from 'react';

export interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default ScrollProvider;
