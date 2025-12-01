import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        <span className="text-cyber-pink font-mono">&lt;</span>
        ESTUDIS
        <span className="text-cyber-pink font-mono">/&gt;</span>
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-neon to-transparent md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Dot on line */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyber-black border-2 border-cyber-neon rounded-full -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(0,255,157,0.5)]"></div>

                {/* Date Side */}
                <div className={`pl-8 md:pl-0 md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'}`}>
                  <span className="font-mono text-cyber-neon text-lg font-bold bg-cyber-neon/10 px-3 py-1 rounded border border-cyber-neon/20 inline-block">
                    {exp.date}
                  </span>
                </div>

                {/* Content Side */}
                <div className={`pl-8 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="bg-cyber-gray/40 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:border-cyber-pink/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-cyber-pink font-mono text-sm mb-3">{exp.institution}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;