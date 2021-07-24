import React from 'react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  type?: 'submit' | 'action'
  onClick?: () => void;
}

const Button = ({ primary = false, backgroundColor, size, label, type, ...props }: ButtonProps) => {
  const sizeStyle = `shoper-button${size ? `--${size}` : ''}`;
  const isPrimary = primary ? 'primary' : '';

  console.log([sizeStyle, isPrimary].join(' '));
  return (
    <div className={[sizeStyle, isPrimary].join(' ')}>
      <span>{label}</span>
    </div>
  )
};

export {
  Button
}