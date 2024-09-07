import api from './api.ts';

export const login = (email: string, password: string) =>
  api.post('/auth/login', { email, password });
export const register = (userData: unknown) =>
  api.post('/auth/register', userData);
export const logout = () => api.post('/auth/logout');
export const getCurrentUser = () => api.get('/auth/me');
