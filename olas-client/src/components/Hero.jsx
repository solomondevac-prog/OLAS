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
  // Only build srcSet/sizes when the image comes from the public /images folder
  // (e.g. "/images/hero-main.png"). Bundled/imported assets should not
  // reference /images/responsive/* because those files live in public/.
  const isPublicImage = typeof image === 'string' && image.startsWith('/images/');
  const srcSet = isPublicImage
    ? (
      `/images/responsive/${filename.replace(/(\.[a-zA-Z]+)$/, '-480$1')} 480w, ` +
      `/images/responsive/${filename.replace(/(\.[a-zA-Z]+)$/, '-1024$1')} 1024w, ` +
      `/images/responsive/${filename.replace(/(\.[a-zA-Z]+)$/, '-1920$1')} 1920w`
    )
    : undefined;

  return (
    // Make the section the same height as the hero image and position the
    // image absolutely so the text can overlay it without creating a blank
    // block beneath the image.
    <section className="relative bg-gray-50 overflow-hidden h-[48vh] sm:h-[60vh]" aria-labelledby="hero-title">
      <img
        src={image}
        {...(srcSet ? { srcSet, sizes: '(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px' } : {})}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />

  {/* Blue-tinted overlay + subtle dark gradient to increase contrast over busy photos */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent pointer-events-none" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />

      <div className="container mx-auto relative z-10 h-full flex items-center">
        <div className="max-w-3xl text-center mx-auto text-white">
          {title && <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg drop-shadow-[0_8px_20px_rgba(0,0,0,0.65)]">{title}</h1>}
          {subtitle && <p className="mt-4 text-lg sm:text-xl text-white/90 drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)]">{subtitle}</p>}
          <div className="mt-6 flex justify-center gap-3">
            {primary && <Button to={primary.to}>{primary.label}</Button>}
            {secondary && <Button to={secondary.to} variant="ghost" className="text-white hover:bg-white/10">{secondary.label}</Button>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
