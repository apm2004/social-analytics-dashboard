import { Bell, User, LogOut, Menu } from 'lucide-react';
import useAuthStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ onMenuClick }) {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Left: Mobile menu + Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-blue-600">AnalyticsAI</h1>
        </div>

        {/* Right: User info */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-100 rounded-lg relative"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {showNotifications && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setShowNotifications(false)}
                ></div>
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">No new notifications</p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-3 border-l pl-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-gray-100 rounded-lg"
              title="Logout"
            >
              <LogOut className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile logout button */}
          <button
            onClick={handleLogout}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            title="Logout"
          >
            <LogOut className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}