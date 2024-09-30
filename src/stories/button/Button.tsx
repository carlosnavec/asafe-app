import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const baseClasses = 'px-4 py-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-full';
  const sizeClasses = size === 'small' ? 'text-xs' : size === 'large' ? 'text-lg' : 'text-base';
  const primaryClasses = primary ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-red-500 hover:bg-gray-700 text-white';
  const customBackgroundColor = backgroundColor ? { backgroundColor } : {};

  return (
    <button
      type="button"
      className={`${baseClasses} ${sizeClasses} ${primaryClasses}`}
      style={customBackgroundColor}
      {...props}
    >
      {label}
    </button>
  );
};