import DashboardLayout from '../components/common/DashboardLayout';
import ContentTable from '../components/tables/ContentTable';
import FilterBar from '../components/common/FilterBar';

export default function ContentPage() {
  const handleFilterChange = (filters) => {
    console.log('Filters changed:', filters);
    // Add filter logic here later
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Performance</h1>
          <p className="text-gray-600 mt-1">Track and analyze your content across all platforms</p>
        </div>

        <FilterBar onFilterChange={handleFilterChange} />
        <ContentTable />
      </div>
    </DashboardLayout>
  );
}