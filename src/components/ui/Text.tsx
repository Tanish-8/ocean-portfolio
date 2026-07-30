import React from 'react';
import { cn } from '@/lib/cn';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'primary' | 'secondary' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'primary',
  size = 'md',
  as: Component = 'p',
  className,
  children,
  ...props
}) => {
  const variants = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    muted: 'text-text-muted',
  };

  const sizes = {
    sm: 'text-xs sm:text-sm',
    md: 'text-sm sm:text-base leading-relaxed',
    lg: 'text-base sm:text-lg leading-relaxed',
  };

  return (
    <Component
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
