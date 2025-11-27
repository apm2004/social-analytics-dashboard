import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { aiInsights } from '../../utils/mockData';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function AudienceInterests() {
  const getTrendIcon = (trend) => {
    if (trend === 'rising') return <TrendingUp className="w-3 h-3 text-green-600" />;
    if (trend === 'falling') return <TrendingDown className="w-3 h-3 text-red-600" />;
    return <Minus className="w-3 h-3 text-gray-600" />;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Audience Interests</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={aiInsights.audienceInterests}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="topic" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
          <Bar dataKey="score" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {aiInsights.audienceInterests.map((interest, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900">{interest.topic}</span>
              {getTrendIcon(interest.trend)}
            </div>
            <span className="text-sm font-bold text-blue-600">{interest.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}