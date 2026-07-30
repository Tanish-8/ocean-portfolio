import React from 'react';

export interface AudioProviderProps {
  children: React.ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default AudioProvider;
