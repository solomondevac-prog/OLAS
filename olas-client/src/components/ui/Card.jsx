import React from 'react';

const Card = ({ title, children, footer, media, className = '' }) => {
  return (
    <article className={`bg-white rounded-lg shadow-sm p-6 flex flex-col h-full ${className}`}>
      {media && <div className="mb-4">{media}</div>}
      <div className="flex-1">
        {title && <h3 className="text-xl font-semibold mb-6">{title}</h3>}
        <div className="text-gray-700">{children}</div>
      </div>
      {footer && <div className="mt-6 pt-4 border-t border-gray-100 pointer-events-auto">{footer}</div>}
    </article>
  );
};

export default Card;
