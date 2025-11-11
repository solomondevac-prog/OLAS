import React from 'react';
import Button from './ui/Button';

const Hero = ({
  image = '/images/hero-main.png',
  imageAlt = 'Hero image',
  title,
  subtitle,
  primary = { to: '/about', label: 'Learn More' },
  secondary = null,
}) => {
  const filename = image.replace(/.*\/(.+)$/, '$1');
  return (
    <section className="relative bg-gray-50 overflow-hidden" aria-labelledby="hero-title">
      <img
        src={image}
        srcSet={
          `/images/responsive/${filename.replace(/(\.[a-zA-Z]+)$/, '-480$1')} 480w, ` +
          `/images/responsive/${filename.replace(/(\.[a-zA-Z]+)$/, '-1024$1')} 1024w, ` +
          `/images/responsive/${filename.replace(/(\.[a-zA-Z]+)$/, '-1920$1')} 1920w`
        }
        sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px"
        alt={imageAlt}
        className="w-full h-[48vh] sm:h-[60vh] object-cover"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10 py-12 sm:py-20">
        <div className="max-w-3xl text-center mx-auto text-white">
          {title && <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow">{title}</h1>}
          {subtitle && <p className="mt-4 text-lg sm:text-xl text-white/90">{subtitle}</p>}
          <div className="mt-6 flex justify-center gap-3">
            {primary && <Button to={primary.to}>{primary.label}</Button>}
            {secondary && <Button to={secondary.to} variant="ghost">{secondary.label}</Button>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
