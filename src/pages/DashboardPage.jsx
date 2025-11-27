import { Users, TrendingUp, Target, BarChart3 } from 'lucide-react';
import KPICard from '../components/dashboard/KPICard';
import EngagementChart from '../components/dashboard/EngagementChart';
import DemographicsChart from '../components/dashboard/DemographicsChart';
import AIInsightsPanel from '../components/insights/AIInsightsPanel';
import AlertsPanel from '../components/dashboard/AlertsPanel';
import DashboardLayout from '../components/common/DashboardLayout';
import ExportButton from '../components/common/ExportButton';
import { kpiData } from '../utils/mockData';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your social media.</p>
          </div>
          <ExportButton />
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Engagement Score"
            value={kpiData.engagementScore}
            change={kpiData.followersGrowth}
            icon={TrendingUp}
            trend="up"
          />
          <KPICard
            title="AI Intent Score"
            value={kpiData.aiIntentScore}
            change={8.3}
            icon={Target}
            trend="up"
          />
          <KPICard
            title="Conversion Rate"
            value={`${kpiData.conversionPrediction}%`}
            change={5.2}
            icon={BarChart3}
            trend="up"
          />
          <KPICard
            title="Total Followers"
            value={kpiData.followers.toLocaleString()}
            change={kpiData.followersGrowth}
            icon={Users}
            trend="up"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EngagementChart />
          </div>
          <div>
            <DemographicsChart />
          </div>
        </div>

        {/* Insights and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AIInsightsPanel />
          <AlertsPanel />
        </div>
      </div>
    </DashboardLayout>
  );
}