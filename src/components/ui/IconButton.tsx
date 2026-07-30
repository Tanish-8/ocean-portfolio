import React from 'react';
import { cn } from '@/lib/cn';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel: string;
  children: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = 'ghost', size = 'md', ariaLabel, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 rounded-full cursor-pointer';

    const variants = {
      primary: 'bg-ocean-surface text-ocean-abyss hover:bg-ocean-shallow shadow-md',
      secondary: 'glass text-text-primary hover:bg-ui-surface',
      outline: 'border border-ui-border text-text-primary hover:bg-ui-surface',
      ghost: 'text-text-primary hover:bg-ui-surface',
    };

    const sizes = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-base',
    };

    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
export default IconButton;
