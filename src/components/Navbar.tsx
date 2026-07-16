import React, { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, GraduationCap, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Chuyên đề học tập', href: '#projects' },
    { name: 'Nhìn nhận bản thân', href: '#reflection' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-navy-800/80 py-3.5 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 group"
          id="navbar-logo-link"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-navy-950 transition-all">
            <GraduationCap size={16} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm text-white tracking-wider font-display uppercase">PORTFOLIO SỐ</span>
            <span className="text-[9px] text-teal-400 tracking-widest font-semibold font-mono">VNU - UEB</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-semibold text-navy-300 hover:text-teal-400 transition-colors uppercase tracking-wider font-display"
              id={`nav-link-desktop-${idx}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, '#projects')}
            className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-lg text-xs font-bold hover:bg-teal-500 hover:text-navy-950 transition-all font-display"
            id="nav-cta-desktop"
          >
            Trang Dự Án
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-navy-300 hover:text-white transition-colors"
          aria-label="Toggle Menu"
          id="navbar-mobile-toggle"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-lg border-b border-navy-800 py-6 px-6 space-y-4 animate-fade-in" id="navbar-mobile-panel">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-bold text-navy-200 hover:text-teal-400 transition-colors py-1.5 uppercase tracking-wider font-display block"
                id={`nav-link-mobile-${idx}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, '#projects')}
              className="w-full text-center py-2.5 bg-teal-500 text-navy-950 rounded-lg text-xs font-bold hover:bg-teal-400 transition-all font-display block"
              id="nav-cta-mobile"
            >
              Trang Dự Án
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
