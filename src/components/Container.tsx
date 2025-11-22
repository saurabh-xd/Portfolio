import { cn } from '@/lib/utils';
import React from 'react';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto max-w-4xl", className)}
      {...props}
    >
      {children}
    </div>
  );
}
