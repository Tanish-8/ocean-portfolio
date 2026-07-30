import React from 'react';
import { cn } from '@/lib/cn';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: boolean;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  gradient = false,
  className,
  children,
  ...props
}) => {
  const styles = {
    h1: 'text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight',
    h2: 'text-3xl sm:text-4xl font-heading font-semibold tracking-tight',
    h3: 'text-2xl sm:text-3xl font-heading font-semibold',
    h4: 'text-xl sm:text-2xl font-heading font-medium',
    h5: 'text-lg font-heading font-medium',
    h6: 'text-base font-heading font-medium',
  };

  return (
    <Component
      className={cn(
        styles[Component],
        gradient ? 'text-gradient' : 'text-text-primary',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
