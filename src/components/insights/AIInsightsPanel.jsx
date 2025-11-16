import { Brain, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { aiInsights } from '../../utils/mockData';

export default function AIInsightsPanel() {
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <Minus className="w-4 h-4 text-gray-600" />;
  };

  const getTrendColor = (trend) => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="w-6 h-6 text-purple-600" />
        <h3 className="text-lg font-bold text-gray-900">AI-Powered Insights</h3>
      </div>

      {/* User Intents */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">User Intent Analysis</h4>
        <div className="space-y-3">
          {aiInsights.userIntents.map((intent, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{intent.intent}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{intent.percentage}%</span>
                    {getTrendIcon(intent.trend)}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${intent.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Recommendations */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Top Recommendations</h4>
        <div className="space-y-3">
          {aiInsights.contentRecommendations.slice(0, 3).map((rec, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-medium text-gray-900">{rec.type}</h5>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  rec.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {rec.priority}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{rec.reason}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">💡 {rec.action}</span>
                <span className="text-xs font-medium text-green-600">{rec.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}