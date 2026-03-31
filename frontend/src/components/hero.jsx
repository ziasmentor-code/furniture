import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const languages = ['English', 'Korean', 'Hindi', 'Tamil', 'Telugu'];

  const slides = [
    {
      image: "/images/dining2.jpg",
      title: "Complete Home Interior",
      titleAccent: "& Furniture Solutions",
      subtitle: "Under one single roof — discover stylish designs for your dream home.",
      tag: "New Collection 2025"
    },
    {
      image: "/images/f2.jpg",
      title: "Modern Furniture",
      titleAccent: "Collection",
      subtitle: "Premium quality furniture crafted for every room in your home.",
      tag: "Premium Quality"
    },
    {
      image: "/images/f3.jpg",
      title: "Elegant Interior",
      titleAccent: "Designs",
      subtitle: "Transform your space with our expert interior designers.",
      tag: "Expert Design"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 400);
  };

  const goToSlide = (index) => handleSlideChange(index);
  const nextSlide = () => handleSlideChange((currentSlide + 1) % slides.length);
  const prevSlide = () => handleSlideChange((currentSlide - 1 + slides.length) % slides.length);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .hero-section {
          font-family: 'Jost', sans-serif;
        }

        .hero-bg {
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-gradient-overlay {
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.75) 0%,
            rgba(0, 0, 0, 0.45) 50%,
            rgba(0, 0, 0, 0.2) 100%
          ), linear-gradient(
            to top,
            rgba(0, 0, 0, 0.6) 0%,
            transparent 50%
          );
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-title-accent {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: #f97316;
        }

        .hero-subtitle {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          letter-spacing: 0.02em;
          line-height: 1.7;
        }

        .slide-tag {
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }

        .content-animate {
          transition: opacity 0.4s ease, transform 0.5s ease;
        }
        .content-animate.fading {
          opacity: 0;
          transform: translateY(16px);
        }
        .content-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-size: 0.78rem;
          background: #f97316;
          color: white;
          padding: 14px 36px;
          border-radius: 3px;
          display: inline-block;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        .btn-primary:hover::after {
          transform: translateX(0);
        }
        .btn-primary:hover {
          background: #ea6a0a;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(249, 115, 22, 0.35);
        }

        .btn-secondary {
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-size: 0.78rem;
          background: transparent;
          color: white;
          padding: 13px 36px;
          border-radius: 3px;
          border: 1px solid rgba(255,255,255,0.55);
          display: inline-block;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.12);
          border-color: white;
          transform: translateY(-2px);
        }

        .lang-btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }

        .dot-indicator {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-number {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          letter-spacing: 0.08em;
          font-size: 0.78rem;
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: #f97316;
          animation: progress 5s linear infinite;
          transform-origin: left;
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .vertical-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent);
        }

        .nav-arrow {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
          background: rgba(255,255,255,0.05);
        }
        .nav-arrow:hover {
          background: rgba(249, 115, 22, 0.7);
          border-color: #f97316;
          transform: scale(1.08);
        }
      `}</style>

      <section className="hero-section relative h-screen flex items-center text-white pt-16 overflow-hidden">
        {/* Background Images */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: currentSlide === idx ? 1 : 0,
            }}
          >
            <div className="hero-gradient-overlay absolute inset-0" />
          </div>
        ))}

        {/* Progress bar */}
        <div
          key={currentSlide}
          className="progress-bar z-20"
        />

        {/* Language Selector */}
        <div className="absolute top-24 right-6 md:top-28 md:right-10 z-20">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="lang-btn flex items-center space-x-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 hover:bg-white/15 transition"
          >
            <i className="fas fa-globe text-xs opacity-80"></i>
            <span>{selectedLanguage}</span>
            <i className={`fas fa-chevron-${isLanguageOpen ? 'up' : 'down'} text-xs opacity-60`}></i>
          </button>

          {isLanguageOpen && (
            <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-lg shadow-2xl overflow-hidden z-30">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">Select Language</p>
              </div>
              <div className="py-1">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition flex items-center justify-between ${
                      selectedLanguage === lang
                        ? 'text-orange-500 font-semibold bg-orange-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {lang}
                    {selectedLanguage === lang && <i className="fas fa-check text-xs text-orange-500"></i>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content — left aligned */}
        <div className="relative z-10 px-8 md:px-20 max-w-3xl">

          {/* Tag pill */}
          <div className={`content-animate ${isTransitioning ? 'fading' : 'visible'} mb-6`}>
            <span className="slide-tag inline-flex items-center gap-2 text-white/70">
              <span className="inline-block w-6 h-px bg-orange-400"></span>
              {slides[currentSlide].tag}
            </span>
          </div>

          {/* Title */}
          <div className={`content-animate ${isTransitioning ? 'fading' : 'visible'} mb-5`} style={{ transitionDelay: '0.05s' }}>
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-white leading-tight">
              {slides[currentSlide].title}
              <br />
              <span className="hero-title-accent">{slides[currentSlide].titleAccent}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`content-animate ${isTransitioning ? 'fading' : 'visible'} mb-10`} style={{ transitionDelay: '0.1s' }}>
            <p className="hero-subtitle text-white/75 text-lg md:text-xl max-w-lg">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Buttons */}
          <div className={`content-animate ${isTransitioning ? 'fading' : 'visible'} flex flex-wrap gap-4`} style={{ transitionDelay: '0.15s' }}>
            <Link to="/products" className="btn-primary">
              Shop Now
            </Link>
            <Link to="/interior" className="btn-secondary">
              Explore Interiors
            </Link>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-10 left-8 md:left-20 right-8 flex items-end justify-between z-20">

          {/* Slide counter + dots */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`dot-indicator rounded-full ${
                    currentSlide === idx
                      ? 'bg-orange-500 w-8 h-2'
                      : 'bg-white/35 hover:bg-white/60 w-2 h-2'
                  }`}
                />
              ))}
            </div>
            <div className="vertical-line" />
            <span className="slide-number text-white/60">
              <span className="text-white font-medium">{String(currentSlide + 1).padStart(2, '0')}</span>
              {' '}/{' '}{String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button onClick={prevSlide} className="nav-arrow">
              <i className="fas fa-arrow-left text-sm"></i>
            </button>
            <button onClick={nextSlide} className="nav-arrow">
              <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
