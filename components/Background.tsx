import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-cyber-black">
      {/* Retro Grid Floor */}
      <div 
        className="absolute bottom-0 left-[-50%] right-[-50%] h-[50vh] bg-[linear-gradient(transparent_0%,rgba(0,255,157,0.1)_1px,transparent_1px),linear-gradient(90deg,transparent_0%,rgba(0,255,157,0.1)_1px,transparent_1px)]"
        style={{
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) translateY(100px) translateZ(-200px)',
          animation: 'grid-move 20s linear infinite'
        }}
      />
      
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-cyan/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      
      {/* Floating Particles/Stars (Simplified CSS) */}
      <style>{`
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
      `}</style>
    </div>
  );
};

export default Background;