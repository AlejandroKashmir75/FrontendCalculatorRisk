import React from 'react';

const LedZeppelinSymbols: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Band Name */}
      <div className="text-center">
        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mb-2">
          LED ZEPPELIN
        </h2>
        <p className="text-sm text-gray-400 font-medium">by Led Zeppelin</p>
      </div>

      {/* Symbols Container */}
      <div className="flex items-center justify-center space-x-6 md:space-x-8">
        {/* Jimmy Page - Zoso Symbol */}
        <div className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300 mb-2">
            <span className="text-2xl md:text-3xl font-black text-black">Z</span>
          </div>
          <p className="text-xs text-yellow-400 font-bold">Jimmy Page</p>
        </div>

        {/* John Paul Jones - Triquetra */}
        <div className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-300 mb-2">
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="text-xs text-blue-400 font-bold">John Paul Jones</p>
        </div>

        {/* John Bonham - Three Circles */}
        <div className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-red-300 mb-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="text-xs text-red-400 font-bold">John Bonham</p>
        </div>

        {/* Robert Plant - Feather in Circle */}
        <div className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg border-2 border-green-300 mb-2">
            <div className="text-white text-xl md:text-2xl">🪶</div>
          </div>
          <p className="text-xs text-green-400 font-bold">Robert Plant</p>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-xs text-gray-500 text-center max-w-64">
        The greatest rock band of all time - influencing generations of musicians
      </p>
    </div>
  );
};

export default LedZeppelinSymbols;

