export default function EngagementHeatmap() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'];
  
  // Generate mock heatmap data (0-100)
  const generateHeatmapData = () => {
    const data = [];
    for (let day = 0; day < 7; day++) {
      for (let hour = 0; hour < 8; hour++) {
        // Higher engagement during business hours and evenings
        let intensity = Math.random() * 30;
        if (hour >= 3 && hour <= 6) intensity += 50; // Business hours + evening
        if (day >= 0 && day <= 4) intensity += 20; // Weekdays boost
        data.push({
          day,
          hour,
          intensity: Math.min(100, intensity)
        });
      }
    }
    return data;
  };

  const heatmapData = generateHeatmapData();

  const getColor = (intensity) => {
    if (intensity < 20) return 'bg-blue-100';
    if (intensity < 40) return 'bg-blue-300';
    if (intensity < 60) return 'bg-blue-500';
    if (intensity < 80) return 'bg-blue-700';
    return 'bg-blue-900';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Engagement Heatmap</h3>
      <p className="text-sm text-gray-600 mb-6">7-day engagement pattern by hour</p>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Hours header */}
          <div className="flex mb-2">
            <div className="w-16"></div>
            {hours.map((hour) => (
              <div key={hour} className="w-12 text-xs text-gray-600 text-center">
                {hour}
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          {days.map((day, dayIndex) => (
            <div key={day} className="flex items-center mb-1">
              <div className="w-16 text-xs font-medium text-gray-700">{day}</div>
              {hours.map((_, hourIndex) => {
                const dataPoint = heatmapData.find(
                  (d) => d.day === dayIndex && d.hour === hourIndex
                );
                return (
                  <div
                    key={hourIndex}
                    className={`w-12 h-8 ${getColor(dataPoint.intensity)} rounded mx-0.5 hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer`}
                    title={`${day} ${hours[hourIndex]}: ${Math.round(dataPoint.intensity)}% engagement`}
                  ></div>
                );
              })}
            </div>
          ))}

          {/* Legend */}
          <div className="flex items-center justify-center space-x-2 mt-4">
            <span className="text-xs text-gray-600">Less</span>
            <div className="w-8 h-4 bg-blue-100 rounded"></div>
            <div className="w-8 h-4 bg-blue-300 rounded"></div>
            <div className="w-8 h-4 bg-blue-500 rounded"></div>
            <div className="w-8 h-4 bg-blue-700 rounded"></div>
            <div className="w-8 h-4 bg-blue-900 rounded"></div>
            <span className="text-xs text-gray-600">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}