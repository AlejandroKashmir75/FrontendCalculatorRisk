import React, { useState } from 'react';
import RiskCalculator from './components/RiskCalculator';
import RiskList from './components/RiskList';
import RockBackground from './components/RockBackground';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'list'>('calculator');

  return (
    <>
      <RockBackground />
      <div className="relative min-h-screen">
        {/* Navigation Tabs */}
        <div className="pt-6 pb-4">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-2xl p-2 border-2 border-yellow-500">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveTab('calculator')}
                  className={`py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                    activeTab === 'calculator'
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-102'
                  }`}
                >
                  🎯 CALCULATOR
                </button>
                <button
                  onClick={() => setActiveTab('list')}
                  className={`py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                    activeTab === 'list'
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-102'
                  }`}
                >
                  🎭 RISK LIST
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pb-8">
          {activeTab === 'calculator' ? <RiskCalculator /> : <RiskList />}
        </div>

        {/* Footer with Led Zeppelin credit */}
        <div className="text-center py-6">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-4 border border-yellow-500 max-w-2xl mx-auto">
            <p className="text-sm text-gray-300 mb-2">
              🎸 Rock & Roll Security Risk Calculator 🎸
            </p>
            <p className="text-xs text-gray-400 mb-2">
              Built with ⚡ and 🎭
            </p>
            <div className="border-t border-yellow-500 pt-2">
              <p className="text-xs text-yellow-400 font-bold">
                Inspired by the legendary sounds of
              </p>
              <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600">
                LED ZEPPELIN
              </p>
              <p className="text-xs text-gray-500 mt-1">
                The greatest rock band of all time
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
