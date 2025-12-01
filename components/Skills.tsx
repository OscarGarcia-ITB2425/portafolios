import React from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-cyber-cyan font-mono">&lt;</span>
        HABILITATS TÉCNICAS
        <span className="text-cyber-cyan font-mono">/&gt;</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_DATA.map((skill, index) => (
          <div 
            key={index}
            className="group relative bg-cyber-gray/30 border border-white/5 p-6 rounded-xl overflow-hidden hover:border-cyber-neon/50 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Hover Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyber-black border border-cyber-neon/30 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-shadow">
                <skill.icon className="text-cyber-neon w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyber-neon transition-colors">
                {skill.name}
              </h3>
              
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 text-sm font-mono">
                    <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mr-2 group-hover:bg-cyber-pink transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;