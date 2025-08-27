import React from 'react';

const RockBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated background with rock theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-black">
        {/* Animated lightning effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-1 h-20 bg-yellow-400 opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-16 bg-yellow-400 opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute top-60 left-1/4 w-1 h-24 bg-yellow-400 opacity-50 animate-pulse delay-500"></div>
        </div>
        
        {/* Guitar strings effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gray-600 opacity-30"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gray-600 opacity-30"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gray-600 opacity-30"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gray-600 opacity-30"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gray-600 opacity-30"></div>
        </div>
        
        {/* Rock symbols floating */}
        <div className="absolute top-10 right-10 text-4xl text-red-500 opacity-20 animate-bounce">
          🎸
        </div>
        <div className="absolute top-32 left-16 text-3xl text-yellow-500 opacity-20 animate-bounce delay-1000">
          ⚡
        </div>
        <div className="absolute bottom-20 right-1/4 text-4xl text-red-600 opacity-20 animate-bounce delay-500">
          🔥
        </div>
        <div className="absolute bottom-32 left-1/3 text-3xl text-yellow-400 opacity-20 animate-bounce delay-1500">
          ⚡
        </div>
        
        {/* Stage lights effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-red-500 rounded-full opacity-10 blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-0 left-1/2 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-xl animate-pulse delay-1400"></div>
        </div>
        
        {/* Smoke effect */}
        <div className="absolute bottom-0 left-0 w-full h-32">
          <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-gray-700 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-gray-600 rounded-full opacity-20 animate-pulse delay-500"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gray-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </div>
  );
};

export default RockBackground;

