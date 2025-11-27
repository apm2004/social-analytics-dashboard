import { Clock, TrendingUp } from 'lucide-react';
import { aiInsights } from '../../utils/mockData';

export default function BestTimeToPost() {
  const getEngagementColor = (engagement) => {
    switch(engagement) {
      case 'Very High': return 'bg-green-100 text-green-700 border-green-300';
      case 'High': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">Best Time to Post</h3>
      </div>

      <div className="space-y-3">
        {aiInsights.bestTimeToPost.map((time, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg border-2 ${getEngagementColor(time.engagement)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900">{time.day}</span>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">{time.score}/100</span>
              </div>
            </div>
            <p className="text-sm text-gray-700">{time.hour}</p>
            <div className="mt-2">
              <span className="text-xs px-2 py-1 rounded-full bg-white/50">
                {time.engagement} Engagement
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}