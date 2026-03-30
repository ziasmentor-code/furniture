import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
    { path: '/interior', name: 'Interior Design' },
    { path: '/contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500;600&display=swap');

        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 255, 255, 0.97);
          border-bottom: 1px solid #e8e0d8;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .navbar-root.scrolled {
          box-shadow: 0 4px 32px rgba(60, 40, 20, 0.08);
          background: rgba(255, 255, 255, 0.99);
        }

        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        /* Logo */
        .navbar-logo {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .logo-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #1a1109;
          line-height: 1;
          text-transform: uppercase;
        }

        .logo-brand span {
          color: #c0622a;
        }

        .logo-tagline {
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.28em;
          color: #9a8878;
          text-transform: uppercase;
        }

        /* Divider pip between logo and links */
        .navbar-divider {
          width: 1px;
          height: 32px;
          background: #ddd5cb;
          margin: 0 2.5rem;
        }

        /* Desktop nav links */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          color: #5a4e44;
          padding: 0.5rem 1.1rem;
          border-radius: 2px;
          position: relative;
          transition: color 0.25s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 1.1rem;
          right: 1.1rem;
          height: 1.5px;
          background: #c0622a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover {
          color: #c0622a;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          color: #c0622a;
        }

        /* CTA Button */
        .navbar-cta {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: #fff;
          background: #1a1109;
          padding: 0.6rem 1.5rem;
          border-radius: 2px;
          margin-left: 1.5rem;
          transition: background 0.25s ease, transform 0.2s ease;
          white-space: nowrap;
        }

        .navbar-cta:hover {
          background: #c0622a;
          transform: translateY(-1px);
        }

        /* Mobile hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
          outline: none;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #1a1109;
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* Mobile drawer */
        .mobile-drawer {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fff;
          border-top: 1px solid #e8e0d8;
          border-bottom: 1px solid #e8e0d8;
          padding: 1.5rem 2rem 2rem;
          box-shadow: 0 16px 48px rgba(60, 40, 20, 0.1);
          animation: slideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-drawer.open {
          display: block;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          color: #5a4e44;
          padding: 0.9rem 0;
          border-bottom: 1px solid #f0ebe4;
          transition: color 0.2s ease, padding-left 0.2s ease;
          gap: 0.6rem;
        }

        .mobile-nav-link:last-of-type {
          border-bottom: none;
        }

        .mobile-nav-link.active,
        .mobile-nav-link:hover {
          color: #c0622a;
          padding-left: 0.4rem;
        }

        .mobile-nav-dot {
          width: 4px;
          height: 4px;
          background: #c0622a;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }

        .mobile-nav-link.active .mobile-nav-dot,
        .mobile-nav-link:hover .mobile-nav-dot {
          opacity: 1;
        }

        .mobile-cta {
          margin-top: 1.25rem;
          display: block;
          text-align: center;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          color: #fff;
          background: #1a1109;
          padding: 0.85rem 1.5rem;
          border-radius: 2px;
          transition: background 0.25s ease;
        }

        .mobile-cta:hover {
          background: #c0622a;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .navbar-divider,
          .navbar-links,
          .navbar-cta {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .mobile-drawer {
            display: none;
          }

          .mobile-drawer.open {
            display: block;
          }
        }
      `}</style>

      <nav className={`navbar-root${isScrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span className="logo-brand">
              Lucas <span>India</span>
            </span>
            <span className="logo-tagline">Home Interior & Furniture</span>
          </Link>

          {/* Desktop: divider + links */}
          <div className="navbar-divider" />

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link${isActive(link.path) ? ' active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link to="/contact" className="navbar-cta">
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`hamburger${isMenuOpen ? ' open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-drawer${isMenuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link${isActive(link.path) ? ' active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mobile-nav-dot" />
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="mobile-cta" onClick={() => setIsMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
