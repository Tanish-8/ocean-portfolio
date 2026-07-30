import React from 'react';

export interface OceanProviderProps {
  children: React.ReactNode;
}

export const OceanProvider: React.FC<OceanProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default OceanProvider;
