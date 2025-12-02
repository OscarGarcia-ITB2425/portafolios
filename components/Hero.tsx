import React, { useState, useEffect } from 'react';
import { HERO_DATA } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  // Typewriter Logic for the Roles
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting]);

  const tick = () => {
    let i = titleIndex % HERO_DATA.titles.length;
    let fullText = HERO_DATA.titles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, displayText.length - 1) 
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setDelta(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setTitleIndex(prev => prev + 1);
      setDelta(150); // Reset speed
    } else if (!isDeleting && updatedText !== fullText) {
      setDelta(100); // Typing speed
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* Text Content */}
        <div className="space-y-6 order-2 md:order-1 text-center md:text-left z-20">
          <div className="inline-block px-3 py-1 border border-cyber-cyan/50 rounded-full bg-cyber-cyan/10 backdrop-blur-md">
            <span className="text-cyber-cyan font-mono text-sm tracking-widest">SYSTEM_READY</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
            Hola, soy <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon via-cyber-cyan to-cyber-purple animate-pulse-slow">
              {HERO_DATA.name.split(' ')[0]}
            </span>
          </h1>
          
          <div className="h-12 flex items-center justify-center md:justify-start">
            <p className="text-xl md:text-2xl font-mono text-gray-300">
              I am a <span className="text-cyber-pink">{displayText}</span>
              <span className="animate-blink border-r-2 border-cyber-pink ml-1 h-6 inline-block align-middle"></span>
            </p>
          </div>
          
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
            {HERO_DATA.role}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="px-8 py-3 bg-cyber-neon text-black font-bold font-mono rounded hover:bg-white transition-all shadow-[0_0_15px_rgba(0,255,157,0.4)]">
              VER PROYECTOS
            </a>
            <a href="#contact" className="px-8 py-3 border border-cyber-gray text-white font-mono rounded hover:border-cyber-cyan hover:text-cyber-cyan transition-all backdrop-blur-sm bg-black/30">
              CONTACTAR
            </a>
          </div>
        </div>

        {/* Visual / Avatar */}
        <div className="order-1 md:order-2 flex justify-center relative">
          {/* Decorative rings */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyber-neon/20 to-cyber-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-cyber-cyan/30 rounded-full p-2 bg-black/50 backdrop-blur-sm">
             <div className="w-full h-full rounded-full overflow-hidden relative group">
                {/* Grayscale + High Contrast filter for "Cyberpunk" look on placeholder */}
                <img 
                  src="/avatar.png" 
                  alt="Avatar" 
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Glitch Overlay Effect */}
                <div className="absolute inset-0 bg-cyber-cyan/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300"></div>
                
                {/* Scanline on image */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.5)_2px)] bg-[size:100%_4px] pointer-events-none"></div>
             </div>
             
             {/* Floating badges */}
             <div className="absolute -bottom-4 -right-4 bg-cyber-black border border-cyber-neon px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(0,255,157,0.3)]">
               <span className="font-mono text-cyber-neon text-xs">STATUS: ONLINE</span>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyber-cyan/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;