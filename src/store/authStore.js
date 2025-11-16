import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      login: (email, password) => {
        if (email && password) {
          const mockUser = {
            id: 1,
            email: email,
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            role: 'admin'
          };
          const mockToken = 'mock-jwt-token-' + Date.now();
          
          set({ 
            user: mockUser, 
            token: mockToken, 
            isAuthenticated: true 
          });
          return { success: true };
        }
        return { success: false, error: 'Invalid credentials' };
      },
      
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
      
      signup: (email, password, name) => {
        const mockUser = {
          id: Date.now(),
          email: email,
          name: name,
          role: 'viewer'
        };
        const mockToken = 'mock-jwt-token-' + Date.now();
        
        set({ 
          user: mockUser, 
          token: mockToken, 
          isAuthenticated: true 
        });
        return { success: true };
      }
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;