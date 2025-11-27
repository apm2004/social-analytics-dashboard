import { Bell } from 'lucide-react';
import useThemeStore from '../../store/themeStore';

export default function NotificationSettings() {
  const { notifications, updateNotification } = useThemeStore();

  const notificationOptions = [
    { key: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
    { key: 'push', label: 'Push Notifications', description: 'Browser push notifications' },
    { key: 'insights', label: 'AI Insights Alerts', description: 'Get notified about new insights' },
    { key: 'weeklyReport', label: 'Weekly Report', description: 'Receive weekly analytics summary' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center space-x-2 mb-6">
        <Bell className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">Notification Settings</h3>
      </div>

      <div className="space-y-4">
        {notificationOptions.map((option) => (
          <div key={option.key} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{option.label}</p>
              <p className="text-xs text-gray-500 mt-1">{option.description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications[option.key]}
                onChange={(e) => updateNotification(option.key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}