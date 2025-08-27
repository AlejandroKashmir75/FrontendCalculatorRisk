import React, { useState } from 'react';
import { Likelihood, Severity, RiskLevel, CreateRiskDto } from '../types/risk';
import { riskApi } from '../services/api';
import RiskCharacter from './RiskCharacter';
import RockBackground from './RockBackground';
import LedZeppelinSymbols from './LedZeppelinSymbols';

const RiskCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CreateRiskDto>({
    hazard: '',
    likelihood: Likelihood.POSSIBLE,
    severity: Severity.INJURY,
  });

  const [calculatedRisk, setCalculatedRisk] = useState<{
    score: number;
    level: RiskLevel;
  } | null>(null);

  const [isCalculating, setIsCalculating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const calculateRisk = () => {
    if (!formData.hazard.trim()) {
      alert('Por favor ingresa una descripción del hazard');
      return;
    }

    setIsCalculating(true);

    // Cálculo con los nuevos valores (1-9 para cada factor)
    const likelihoodScores = {
      [Likelihood.IMPOSSIBLE]: 1,
      [Likelihood.REMOTE]: 2,
      [Likelihood.UNLIKELY]: 3,
      [Likelihood.POSSIBLE]: 4,
      [Likelihood.UNUSUAL]: 5,
      [Likelihood.KNOWN]: 6,
      [Likelihood.LIKELY]: 7,
      [Likelihood.USUAL]: 8,
      [Likelihood.CERTAIN]: 9,
    };

    const severityScores = {
      [Severity.INSIGNIFICANT]: 1,
      [Severity.MINOR_INCIDENT]: 2,
      [Severity.MINOR_INJURY]: 3,
      [Severity.HEALTH_DAMAGE]: 4,
      [Severity.INJURY]: 5,
      [Severity.MULTIPLE_INJURIES]: 6,
      [Severity.SERIOUS_INJURY]: 7,
      [Severity.FATAL]: 8,
      [Severity.MULTIPLE_FATALITIES]: 9,
    };

    const score = likelihoodScores[formData.likelihood] * severityScores[formData.severity];
    
    let level: RiskLevel;
    if (score <= 9) level = RiskLevel.VERY_LOW;
    else if (score <= 25) level = RiskLevel.LOW;
    else if (score <= 49) level = RiskLevel.MEDIUM;
    else if (score <= 64) level = RiskLevel.HIGH;
    else level = RiskLevel.VERY_HIGH;

    setCalculatedRisk({ score, level });
    setIsCalculating(false);
  };

  const saveRisk = async () => {
    if (!calculatedRisk) {
      alert('Primero debes calcular el riesgo');
      return;
    }

    setIsSaving(true);
    setSaveMessage(null);

    try {
      await riskApi.create(formData);
      setSaveMessage('Riesgo guardado exitosamente!');
      
      // Limpiar formulario
      setFormData({
        hazard: '',
        likelihood: Likelihood.POSSIBLE,
        severity: Severity.INJURY,
      });
      setCalculatedRisk(null);
      
      // Limpiar mensaje después de 3 segundos
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      console.error('Error saving risk:', error);
      setSaveMessage('Error al guardar el riesgo');
    } finally {
      setIsSaving(false);
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

  const getProgressWidth = (score: number) => {
    return Math.min((score / 81) * 100, 100);
  };

  return (
    <>
      <RockBackground />
      <div className="relative max-w-6xl mx-auto p-6">
        {/* Header with rock theme */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 mb-4 animate-pulse">
            ⚡ SECURITY RISK CALCULATOR ⚡
          </h1>
          <p className="text-xl text-gray-300 font-semibold mb-6">
            🎸 Rock & Roll Risk Assessment 🎸
          </p>
          
          {/* Led Zeppelin Symbols */}
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-500 mb-6">
            <LedZeppelinSymbols />
          </div>
        </div>

        {/* Form Section with rock styling */}
        <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 border-2 border-red-500">
          <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
            🎯 CALCULATE RISK
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hazard Field */}
            <div className="md:col-span-3">
              <label className="block text-lg font-bold text-yellow-400 mb-3">
                🚨 HAZARD
              </label>
              <input
                type="text"
                value={formData.hazard}
                onChange={(e) => setFormData({ ...formData, hazard: e.target.value })}
                placeholder="Describe the security hazard..."
                className="w-full px-4 py-3 bg-gray-800 border-2 border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 font-medium"
              />
            </div>

            {/* Likelihood Select */}
            <div>
              <label className="block text-lg font-bold text-blue-400 mb-3">
                🎲 LIKELIHOOD
              </label>
              <select
                value={formData.likelihood}
                onChange={(e) => setFormData({ ...formData, likelihood: e.target.value as Likelihood })}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white font-medium"
              >
                {Object.values(Likelihood).map((likelihood) => (
                  <option key={likelihood} value={likelihood}>
                    {likelihood}
                  </option>
                ))}
              </select>
            </div>

            {/* Severity Select */}
            <div>
              <label className="block text-lg font-bold text-red-400 mb-3">
                💀 SEVERITY
              </label>
              <select
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value as Severity })}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent text-white font-medium"
              >
                {Object.values(Severity).map((severity) => (
                  <option key={severity} value={severity}>
                    {severity}
                  </option>
                ))}
              </select>
            </div>

            {/* Calculate Button */}
            <div className="flex items-end">
              <button
                onClick={calculateRisk}
                disabled={isCalculating}
                className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg"
              >
                {isCalculating ? '⚡ CALCULATING... ⚡' : '🎯 CALCULATE RISK 🎯'}
              </button>
            </div>
          </div>
        </div>

        {/* Result Section with character display */}
        {calculatedRisk && (
          <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 border-2 border-yellow-500">
            <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
              🎭 RISK RESULT
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Risk details */}
              <div className="space-y-6">
                {/* Risk Score */}
                <div>
                  <label className="block text-lg font-bold text-white mb-3">
                    🎯 Risk Score: {calculatedRisk.score}/81
                  </label>
                  <div className="w-full bg-gray-700 rounded-full h-4 border-2 border-yellow-400">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${getRiskColor(calculatedRisk.level)} shadow-lg`}
                      style={{ width: `${getProgressWidth(calculatedRisk.score)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Risk Level */}
                <div>
                  <label className="block text-lg font-bold text-white mb-3">
                    🚨 Risk Level
                  </label>
                  <div className={`inline-block px-6 py-3 rounded-lg text-white font-bold text-lg shadow-lg ${getRiskColor(calculatedRisk.level)} border-2 border-white`}>
                    {calculatedRisk.level}
                  </div>
                </div>

                {/* Save Button */}
                <div className="pt-4">
                  <button
                    onClick={saveRisk}
                    disabled={isSaving}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg"
                  >
                    {isSaving ? '💾 SAVING... 💾' : '💾 SAVE RISK 💾'}
                  </button>
                </div>

                {/* Save Message */}
                {saveMessage && (
                  <div className={`text-center py-3 px-4 rounded-lg font-bold ${
                    saveMessage.includes('Error') 
                      ? 'bg-red-900 text-red-200 border-2 border-red-500' 
                      : 'bg-green-900 text-green-200 border-2 border-green-500'
                  }`}>
                    {saveMessage}
                  </div>
                )}
              </div>

              {/* Right side - Character display */}
              <div className="flex justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">
                    🎭 RISK CHARACTER
                  </h3>
                  <RiskCharacter severity={formData.severity} size="lg" />
                  <p className="text-sm text-gray-400 mt-2 max-w-48">
                    Each severity level represents a different rock concert character
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RiskCalculator;
