import { LayoutDashboard, Brain, FileText, Settings, TrendingUp, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Brain, label: 'AI Insights', path: '/insights' },
    { icon: FileText, label: 'Content', path: '/content' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            {/* Mobile close button */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold">AnalyticsAI</span>
              </div>
              <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}