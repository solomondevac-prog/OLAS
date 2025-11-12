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
    <section className="relative overflow-hidden h-[50vh] sm:h-[65vh] lg:h-[75vh]" aria-labelledby="hero-title">
      <img
        src={image}
        {...(srcSet ? { srcSet, sizes: '(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px' } : {})}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />

  {/* Balanced and professional overlays for text visibility */}
  {/* Darker top overlay for heading area */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent pointer-events-none" />
  {/* Bottom gradient for visual depth */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
  {/* Center warm tint overlay with blue shade */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent pointer-events-none" />
  {/* Subtle blue overlay for entire image */}
  <div className="absolute inset-0 bg-blue-500/15 mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl text-center mx-auto text-white w-full">
          {title && (
            <h1 
              id="hero-title" 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 sm:mb-8 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed font-medium mb-10 sm:mb-12 drop-shadow-[0_3px_8px_rgba(0,0,0,0.4)] max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6">
            {primary && (
              <Button 
                to={primary.to} 
                className="px-10 py-4 sm:px-12 sm:py-5 text-base sm:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button 
                to={secondary.to} 
                variant="ghost" 
                className="px-10 py-4 sm:px-12 sm:py-5 text-base sm:text-lg font-bold !text-white border-2 border-white/80 hover:bg-white/20 hover:border-white/95 rounded-xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-1"
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
