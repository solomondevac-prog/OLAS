import React from 'react';

const Card = ({ title, children, footer, media, className = '' }) => {
  return (
    <article className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      {media && <div className="mb-4">{media}</div>}
      <div>
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        <div className="text-gray-700">{children}</div>
        {footer && <div className="mt-4 text-sm text-gray-500">{footer}</div>}
      </div>
    </article>
  );
};

export default Card;
