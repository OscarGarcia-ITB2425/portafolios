import React from 'react';
import { CONTACT_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-cyber-neon font-mono">&lt;</span>
        CONTACT
        <span className="text-cyber-neon font-mono">/&gt;</span>
      </h2>

      <div className="bg-cyber-gray/20 border border-cyber-neon/20 rounded-2xl p-8 backdrop-blur-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_DATA.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              download={item.isDownload}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-transparent hover:border-cyber-neon/30 hover:bg-cyber-neon/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-cyber-black border border-cyber-gray flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyber-neon transition-all shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]">
                <item.icon className="text-gray-400 group-hover:text-cyber-neon w-5 h-5 transition-colors" />
              </div>
              
              <h3 className="font-mono text-lg text-white mb-2">{item.title}</h3>
              
              <span className={`text-sm break-all ${item.isDownload ? 'text-cyber-pink font-bold' : 'text-gray-400 group-hover:text-cyber-cyan transition-colors'}`}>
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;