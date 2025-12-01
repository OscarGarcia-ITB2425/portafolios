import React from 'react';
import { ABOUT_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="border border-cyber-cyan/20 bg-cyber-gray/40 backdrop-blur-md rounded-lg overflow-hidden max-w-4xl mx-auto shadow-lg hover:shadow-[0_0_20px_rgba(0,225,255,0.1)] transition-shadow duration-300">
        {/* Terminal Header */}
        <div className="bg-cyber-black/80 px-4 py-2 flex items-center gap-2 border-b border-cyber-cyan/20">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 font-mono text-xs text-gray-400">user@oscar-portfolio:~/about-me</div>
        </div>

        <div className="p-8 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                <span className="text-cyber-neon">&gt;</span> YO
              </h2>
              <p className="text-gray-300 leading-relaxed border-l-2 border-cyber-neon/30 pl-4">
                {ABOUT_DATA.intro}
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                <span className="text-cyber-pink">&gt;</span> A DONDE VOY?
              </h2>
              <p className="text-gray-300 leading-relaxed border-l-2 border-cyber-pink/30 pl-4">
                {ABOUT_DATA.goals}
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            {/* Abstract Graphic representing AI/Crypto */}
             <div className="relative w-full aspect-square border border-cyber-gray rounded bg-black/50 p-2">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-2 opacity-50">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className={`bg-cyber-neon/20 ${i % 3 === 0 ? 'bg-cyber-purple/20' : ''} animate-pulse`} style={{animationDelay: `${i * 100}ms`}}></div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-mono text-cyber-cyan text-xs">
                    ENCRYPTING...
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;