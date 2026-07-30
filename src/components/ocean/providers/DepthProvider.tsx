import React from 'react';

export interface DepthProviderProps {
  children: React.ReactNode;
}

export const DepthProvider: React.FC<DepthProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default DepthProvider;
