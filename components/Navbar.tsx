import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'YO', href: '#about' },
    { name: 'HABILIDADES', href: '#skills' },
    { name: 'PROYECTOS', href: '#projects' },
    { name: 'ESTUDIOS', href: '#experience' },
    { name: 'CONTACTO', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyber-black/90 backdrop-blur-md border-b border-cyber-neon/30 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Terminal Icon */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 border border-cyber-neon rounded-md group-hover:bg-cyber-neon/10 transition-colors">
            <Terminal className="text-cyber-neon w-6 h-6" />
          </div>
          <span className="font-mono text-xl font-bold text-white tracking-tighter">
            Òscar<span className="text-cyber-neon">_García</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm tracking-wider text-gray-400 hover:text-cyber-cyan transition-colors relative group"
            >
              <span className="mr-1 text-cyber-neon opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a 
             href="#contact"
             className="px-4 py-2 border border-cyber-pink text-cyber-pink font-mono text-sm hover:bg-cyber-pink hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]"
          >
            HIRE_ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cyber-neon p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-cyber-black border-b border-cyber-neon/30 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-lg text-gray-300 hover:text-cyber-neon border-l-2 border-transparent hover:border-cyber-neon pl-4 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;