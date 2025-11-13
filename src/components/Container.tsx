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
      className={` mx-auto max-w-4xl bg-white dark:bg-black  ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
