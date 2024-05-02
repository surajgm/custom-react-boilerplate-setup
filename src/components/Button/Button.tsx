import React from 'react';
import clsx from 'clsx';

const variants = {
  primary: 'bg-primary-500 text-black',
  secondary: 'bg-white text-primary-500',
};

const sizes = {
  sm: 'py-[10px] px-[18px] text-sm',
  md: 'py-[10px] px-[18px] text-md',
  lg: 'py-[10px] px-[18px] text-lg',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed rounded-lg shadow-sm font-medium focus:outline-none hover:opacity-80',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="mx-2">{props.children}</span>
      </button>
    );
  }
);
