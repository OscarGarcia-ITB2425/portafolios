import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-cyber-purple font-mono">&lt;</span>
        PROJECTES DESTACATS
        <span className="text-cyber-purple font-mono">/&gt;</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col h-full rounded-xl overflow-hidden border transition-all duration-300 ${
                project.isGithub 
                ? 'bg-[#0d1117] border-gray-700 hover:border-white' 
                : 'bg-cyber-gray/30 border-white/10 hover:border-cyber-cyan/50 hover:shadow-[0_0_20px_rgba(0,225,255,0.15)]'
            }`}
          >
            {/* Image Placeholder area - Simulating a thumbnail */}
            <div className="h-40 w-full overflow-hidden relative bg-black">
                {project.isGithub ? (
                     <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                         <project.icon size={64} className="text-gray-700 group-hover:text-white transition-colors"/>
                     </div>
                ) : (
                    <>
                        <img 
                            src={`https://picsum.photos/seed/${index + 50}/600/300`} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                        />
                         <div className="absolute inset-0 bg-cyber-cyan/20 mix-blend-overlay"></div>
                    </>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                 <h3 className={`text-xl font-bold ${project.isGithub ? 'text-white' : 'text-cyber-cyan group-hover:text-white transition-colors'}`}>
                    {project.title}
                 </h3>
                 <ExternalLink size={16} className="text-gray-500 group-hover:text-cyber-neon" />
              </div>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              {project.tags && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-cyber-neon border border-cyber-neon/20">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;