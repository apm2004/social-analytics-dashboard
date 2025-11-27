import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      darkMode: false,
      notifications: {
        email: true,
        push: true,
        insights: true,
        weeklyReport: false
      },
      
      toggleDarkMode: () => set((state) => {
        const newDarkMode = !state.darkMode;
        // Apply dark mode to document
        if (newDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { darkMode: newDarkMode };
      }),
      
      updateNotification: (key, value) => set((state) => ({
        notifications: {
          ...state.notifications,
          [key]: value
        }
      })),
    }),
    {
      name: 'theme-storage',
    }
  )
);

export default useThemeStore;