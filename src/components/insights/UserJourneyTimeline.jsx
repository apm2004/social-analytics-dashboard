import { userJourney } from '../../utils/mockData';

export default function UserJourneyTimeline() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-6">User Journey Example</h3>
      <p className="text-sm text-gray-600 mb-6">Typical customer path from awareness to purchase</p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {/* Journey steps */}
        <div className="space-y-6">
          {userJourney.map((step, index) => (
            <div key={index} className="relative flex items-start space-x-4">
              {/* Icon circle */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                {step.icon}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-50 rounded-lg p-4 mt-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                      {step.stage}
                    </p>
                    <p className="text-sm font-medium text-gray-900">{step.action}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{step.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm font-semibold text-green-900">✅ Conversion Successful!</p>
        <p className="text-xs text-green-700 mt-1">
          Average time to conversion: 2.5 days | Touchpoints: 6
        </p>
      </div>
    </div>
  );
}