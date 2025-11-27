import DashboardLayout from '../components/common/DashboardLayout';
import AIInsightsPanel from '../components/insights/AIInsightsPanel';
import SentimentAnalysis from '../components/insights/SentimentAnalysis';
import BestTimeToPost from '../components/insights/BestTimeToPost';
import AudienceInterests from '../components/insights/AudienceInterests';
import UserJourneyTimeline from '../components/insights/UserJourneyTimeline';
import EngagementHeatmap from '../components/insights/EngagementHeatmap';
import ExportButton from '../components/common/ExportButton';

export default function InsightsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Insights</h1>
            <p className="text-gray-600 mt-1">Powered insights to grow your social media presence</p>
          </div>
          <ExportButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <AIInsightsPanel />
            <SentimentAnalysis />
            <UserJourneyTimeline />
          </div>
          <div className="space-y-6">
            <BestTimeToPost />
            <AudienceInterests />
            <EngagementHeatmap />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}