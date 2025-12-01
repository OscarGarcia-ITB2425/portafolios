import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const fullText = "INITIALIZING SYSTEM...";

  useEffect(() => {
    // Typewriter effect for text
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 80);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-cyber-black z-[100] flex flex-col items-center justify-center font-mono text-cyber-neon">
      <div className="w-80 max-w-[90%] space-y-4">
        <div className="text-xl tracking-widest animate-pulse">
          {text}<span className="inline-block w-3 h-5 bg-cyber-neon ml-1 animate-blink"></span>
        </div>
        
        {/* Retro Progress Bar */}
        <div className="w-full h-6 border-2 border-cyber-neon p-1 relative overflow-hidden">
          <div 
            className="h-full bg-cyber-neon transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between text-sm text-cyber-cyan">
          <span>LOADING_ASSETS</span>
          <span>{progress}%</span>
        </div>

        <div className="text-xs text-cyber-pink/70 mt-8 text-center uppercase">
          Estableciendo conexión segura...
        </div>
      </div>
    </div>
  );
};

export default Loader;