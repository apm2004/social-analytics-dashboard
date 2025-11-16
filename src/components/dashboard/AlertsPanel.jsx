import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { alerts } from '../../utils/mockData';

export default function AlertsPanel() {
  const getIcon = (type) => {
    switch(type) {
      case 'warning': return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'success': return <CheckCircle className="w-5 h-5 text-green-600" />;
      default: return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getBgColor = (type) => {
    switch(type) {
      case 'warning': return 'bg-yellow-50 border-yellow-200';
      case 'success': return 'bg-green-50 border-green-200';
      default: return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Alerts</h3>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className={`flex items-start space-x-3 p-4 rounded-lg border ${getBgColor(alert.type)}`}>
            <div className="flex-shrink-0 mt-0.5">
              {getIcon(alert.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{alert.message}</p>
              <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}