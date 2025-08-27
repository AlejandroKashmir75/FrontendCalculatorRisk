import React from 'react';
import { Severity } from '../types/risk';

interface RiskCharacterProps {
  severity: Severity;
  size?: 'sm' | 'md' | 'lg';
}

const RiskCharacter: React.FC<RiskCharacterProps> = ({ severity, size = 'md' }) => {
  const getCharacterInfo = (severity: Severity) => {
    switch (severity) {
      case Severity.INSIGNIFICANT:
        return {
          name: 'Roadie',
          description: 'Just a minor setup issue',
          emoji: '🔧',
          color: 'text-gray-500',
          bgColor: 'bg-gray-100'
        };
      case Severity.MINOR_INCIDENT:
        return {
          name: 'Groupie',
          description: 'Small backstage problem',
          emoji: '💄',
          color: 'text-pink-500',
          bgColor: 'bg-pink-100'
        };
      case Severity.MINOR_INJURY:
        return {
          name: 'Stage Hand',
          description: 'Minor equipment injury',
          emoji: '🩹',
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-100'
        };
      case Severity.HEALTH_DAMAGE:
        return {
          name: 'Sound Tech',
          description: 'Hearing damage risk',
          emoji: '🎧',
          color: 'text-orange-500',
          bgColor: 'bg-orange-100'
        };
      case Severity.INJURY:
        return {
          name: 'Guitarist',
          description: 'Stage fall injury',
          emoji: '🎸',
          color: 'text-red-500',
          bgColor: 'bg-red-100'
        };
      case Severity.MULTIPLE_INJURIES:
        return {
          name: 'Band Members',
          description: 'Multiple stage accidents',
          emoji: '🎤',
          color: 'text-red-600',
          bgColor: 'bg-red-200'
        };
      case Severity.SERIOUS_INJURY:
        return {
          name: 'Lead Singer',
          description: 'Serious stage incident',
          emoji: '🔥',
          color: 'text-red-700',
          bgColor: 'bg-red-300'
        };
      case Severity.FATAL:
        return {
          name: 'Rock Legend',
          description: 'Fatal stage accident',
          emoji: '💀',
          color: 'text-black',
          bgColor: 'bg-gray-800'
        };
      case Severity.MULTIPLE_FATALITIES:
        return {
          name: 'Tragic Event',
          description: 'Multiple fatalities',
          emoji: '⚰️',
          color: 'text-white',
          bgColor: 'bg-black'
        };
      default:
        return {
          name: 'Unknown',
          description: 'Risk level unclear',
          emoji: '❓',
          color: 'text-gray-400',
          bgColor: 'bg-gray-50'
        };
    }
  };

  const character = getCharacterInfo(severity);
  const sizeClasses = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-24 h-24 text-4xl',
    lg: 'w-32 h-32 text-6xl'
  };

  return (
    <div className={`flex flex-col items-center ${sizeClasses[size]}`}>
      <div className={`${character.bgColor} ${character.color} rounded-full flex items-center justify-center shadow-lg border-2 border-current mb-2`}>
        <span>{character.emoji}</span>
      </div>
      <div className="text-center">
        <div className={`font-bold text-xs ${character.color}`}>
          {character.name}
        </div>
        <div className="text-xs text-gray-600 max-w-20">
          {character.description}
        </div>
      </div>
    </div>
  );
};

export default RiskCharacter;

