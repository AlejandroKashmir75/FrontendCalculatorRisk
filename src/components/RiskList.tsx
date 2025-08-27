import React, { useState, useEffect } from 'react';
import { Risk, RiskLevel } from '../types/risk';
import { riskApi } from '../services/api';
import RiskCharacter from './RiskCharacter';
import RockBackground from './RockBackground';

const RiskList: React.FC = () => {
  const [risks, setRisks] = useState<Risk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRisks();
  }, []);

  const loadRisks = async () => {
    try {
      setLoading(true);
      const data = await riskApi.getAll();
      setRisks(data);
      setError(null);
    } catch (err) {
      setError('Error loading risks');
      console.error('Error loading risks:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteRisk = async (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este riesgo?')) {
      try {
        await riskApi.delete(id);
        setRisks(risks.filter(risk => risk.id !== id));
      } catch (err) {
        console.error('Error deleting risk:', err);
        alert('Error al eliminar el riesgo');
      }
    }
  };

  const getRiskColor = (level: RiskLevel) => {
    switch (level) {
      case RiskLevel.VERY_LOW: return 'bg-risk-very-low';
      case RiskLevel.LOW: return 'bg-risk-low';
      case RiskLevel.MEDIUM: return 'bg-risk-medium';
      case RiskLevel.HIGH: return 'bg-risk-high';
      case RiskLevel.VERY_HIGH: return 'bg-risk-very-high';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <>
        <RockBackground />
        <div className="relative max-w-6xl mx-auto p-6">
          <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <div className="flex justify-center items-center py-16">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-400 mb-4"></div>
                <p className="text-yellow-400 text-xl font-bold">Loading Rock & Roll Risks...</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <RockBackground />
        <div className="relative max-w-6xl mx-auto p-6">
          <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <div className="text-center py-16">
              <p className="text-red-400 text-xl mb-6 font-bold">🚨 {error} 🚨</p>
              <button
                onClick={loadRisks}
                className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🔄 Reintentar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <RockBackground />
      <div className="relative max-w-7xl mx-auto p-6">
        <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          {/* Led Zeppelin Tribute Header */}
          <div className="text-center mb-8">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-4 border border-yellow-500 mb-6">
              <p className="text-xs text-yellow-400 font-bold mb-1">
                Powered by the spirit of
              </p>
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600">
                LED ZEPPELIN
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-400">
              🎭 RISK LIST - ROCK & ROLL EDITION 🎭
            </h2>
            <button
              onClick={loadRisks}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔄 Refresh
            </button>
          </div>

          {risks.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-6xl mb-4">🎸</div>
              <p className="text-2xl font-bold">No hay riesgos registrados</p>
              <p className="text-lg">¡Es hora de crear algunos riesgos épicos!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {risks.map((risk) => (
                <div key={risk.id} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border-2 border-gray-600 hover:border-yellow-400 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    {/* Left side - Risk details */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-yellow-400 mb-1">
                            🚨 HAZARD
                          </label>
                          <p className="text-white font-medium">{risk.hazard}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-blue-400 mb-1">
                            🎲 LIKELIHOOD
                          </label>
                          <p className="text-white font-medium">{risk.likelihood}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-red-400 mb-1">
                            💀 SEVERITY
                          </label>
                          <p className="text-white font-medium">{risk.severity}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-purple-400 mb-1">
                            📅 DATE
                          </label>
                          <p className="text-white font-medium">{formatDate(risk.createdAt)}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-green-400 mb-1">
                            🎯 SCORE
                          </label>
                          <p className="text-white font-bold text-lg">{risk.riskScore}/81</p>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-orange-400 mb-1">
                            🚨 LEVEL
                          </label>
                          <span className={`inline-flex px-3 py-1 text-sm font-bold rounded-full text-white ${getRiskColor(risk.riskLevel)} border-2 border-white`}>
                            {risk.riskLevel}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Character display */}
                    <div className="flex justify-center">
                      <div className="text-center">
                        <RiskCharacter severity={risk.severity} size="md" />
                        <button
                          onClick={() => deleteRisk(risk.id)}
                          className="mt-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RiskList;
