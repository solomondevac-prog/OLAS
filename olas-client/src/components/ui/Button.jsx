import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ to, children, variant = 'primary', className = '', ...props }) => {
  const base = 'ui-btn';
  const variantClass = `ui-btn-${variant}`;
  const cls = [base, variantClass, className].filter(Boolean).join(' ');

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
