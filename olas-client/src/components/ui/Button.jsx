import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, variant = 'primary', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-primary text-white shadow-md hover:bg-primary-dark focus:ring-primary/40',
    secondary: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  };

  const cls = [base, variants[variant] || variants.primary, className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
