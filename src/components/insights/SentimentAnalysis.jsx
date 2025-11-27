import { Smile, Meh, Frown } from 'lucide-react';
import { aiInsights } from '../../utils/mockData';

export default function SentimentAnalysis() {
  const { sentimentAnalysis } = aiInsights;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Sentiment Analysis</h3>

      <div className="space-y-4">
        {/* Positive */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Smile className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Positive</span>
            </div>
            <span className="text-sm font-bold text-gray-900">{sentimentAnalysis.positive}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all"
              style={{ width: `${sentimentAnalysis.positive}%` }}
            ></div>
          </div>
        </div>

        {/* Neutral */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Meh className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Neutral</span>
            </div>
            <span className="text-sm font-bold text-gray-900">{sentimentAnalysis.neutral}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gray-400 h-3 rounded-full transition-all"
              style={{ width: `${sentimentAnalysis.neutral}%` }}
            ></div>
          </div>
        </div>

        {/* Negative */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Frown className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-gray-700">Negative</span>
            </div>
            <span className="text-sm font-bold text-gray-900">{sentimentAnalysis.negative}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-red-500 h-3 rounded-full transition-all"
              style={{ width: `${sentimentAnalysis.negative}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">Overall Sentiment:</span> Very Positive 🎉
        </p>
        <p className="text-xs text-blue-700 mt-1">
          Your audience loves your content! Keep up the great work.
        </p>
      </div>
    </div>
  );
}