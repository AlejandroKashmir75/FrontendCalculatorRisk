import axios from 'axios';
import { Risk, CreateRiskDto } from '../types/risk';

const API_BASE_URL = (import.meta as any).env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const riskApi = {
  // Crear nuevo riesgo
  create: async (riskData: CreateRiskDto): Promise<Risk> => {
    const response = await api.post<Risk>('/risks', riskData);
    return response.data;
  },

  // Obtener todos los riesgos
  getAll: async (): Promise<Risk[]> => {
    const response = await api.get<Risk[]>('/risks');
    return response.data;
  },

  // Obtener riesgo por ID
  getById: async (id: number): Promise<Risk> => {
    const response = await api.get<Risk>(`/risks/${id}`);
    return response.data;
  },

  // Eliminar riesgo
  delete: async (id: number): Promise<void> => {
    await api.delete(`/risks/${id}`);
  },
};

export default api;

