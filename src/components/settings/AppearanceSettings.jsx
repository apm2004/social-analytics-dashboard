import { Moon, Sun, Monitor } from 'lucide-react';
import useThemeStore from '../../store/themeStore';

export default function AppearanceSettings() {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center space-x-2 mb-6">
        {darkMode ? (
          <Moon className="w-6 h-6 text-blue-600" />
        ) : (
          <Sun className="w-6 h-6 text-blue-600" />
        )}
        <h3 className="text-lg font-bold text-gray-900">Appearance</h3>
      </div>

      <div className="space-y-4">
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between py-3">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Dark Mode</p>
            <p className="text-xs text-gray-500 mt-1">Toggle dark theme for better viewing at night</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Theme Preview */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 mb-3">Preview</p>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border-2 border-gray-200`}>
            <h4 className="font-bold mb-2">Sample Dashboard Card</h4>
            <p className="text-sm opacity-75">This is how your dashboard will look</p>
            <div className="mt-3 flex space-x-2">
              <div className="w-16 h-2 bg-blue-500 rounded"></div>
              <div className="w-12 h-2 bg-purple-500 rounded"></div>
              <div className="w-20 h-2 bg-pink-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}