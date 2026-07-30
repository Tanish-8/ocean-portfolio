import React from 'react';
import { cn } from '@/lib/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  fullHeight?: boolean;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, fullHeight = true, className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden',
          fullHeight && 'min-h-screen flex flex-col justify-center items-center',
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
export default Section;
