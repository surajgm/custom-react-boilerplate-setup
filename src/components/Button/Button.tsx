import React from 'react';
import clsx from 'clsx';

const variants = {
  primary: 'bg-primary-500 text-tgray-700',
  dropDown: 'bg-white text-tgray-700',
};

const sizes = {
  sm: 'py-[10px] px-[18px] text-sm',
  md: 'py-[10px] px-[18px] text-md',
  lg: 'py-[10px] px-[18px] text-lg',
  dropDown: 'py-[10px] text-sm',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  icon?: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = 'items-center justify-center hover:opacity-80',
      variant = 'primary',
      size = 'md',
      icon = '',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex disabled:opacity-70 disabled:cursor-not-allowed rounded-lg shadow-sm font-medium focus:outline-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {props.children && <span className="mx-2 ">{props.children}</span>}
        {icon && <img src={icon} alt="Button icon" />}
      </button>
    );
  }
);
