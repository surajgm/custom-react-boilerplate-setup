import React from 'react';
import clsx from 'clsx';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', className = '', icon = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex items-center justify-center shadow-sm hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed  focus:outline-none',
          className
        )}
        {...props}
      >
        {props.children && <span>{props.children}</span>}
        {icon && <img src={icon} alt="Button icon" />}
      </button>
    );
  }
);
