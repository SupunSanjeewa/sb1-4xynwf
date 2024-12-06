import React from 'react';
import { AuthGuard } from './components/Auth/AuthGuard';
import { Sidebar } from './components/Layout/Sidebar';
import { DashboardHeader } from './components/Dashboard/DashboardHeader';
import { DashboardMetrics } from './components/Dashboard/DashboardMetrics';
import { DashboardCharts } from './components/Dashboard/DashboardCharts';
import { DashboardTable } from './components/Dashboard/DashboardTable';
import { DateRangeFilter } from './components/Filters/DateRangeFilter';
import { FileUpload } from './components/DataManagement/FileUpload';
import type { ColumnDef } from '@tanstack/react-table';
import type { MetricData } from './types';

function App() {
  const metrics = [
    { title: 'Overall Accuracy', value: 98.5, change: 2.1, unit: '%' },
    { title: 'Average RPH', value: 42, change: -1.5 },
    { title: 'Productivity', value: 89.2, change: 3.4, unit: '%' },
    { title: 'Active Projects', value: 12, change: 1 },
  ];

  const accuracyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Accuracy Trend',
        data: [96, 97, 95.5, 97.5, 98.2, 98.5],
        borderColor: '#0066CC',
        tension: 0.4,
      },
    ],
  };

  const rphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'RPH Trend',
      data: [38, 42, 39, 41, 40, 42],
      borderColor: '#10B981',
      tension: 0.4,
    }],
  };

  const columns: ColumnDef<MetricData>[] = [
    {
      accessorKey: 'date',
      header: 'Date',
    },
    {
      accessorKey: 'accuracy',
      header: 'Accuracy',
    },
    {
      accessorKey: 'rph',
      header: 'RPH',
    },
    {
      accessorKey: 'productivity',
      header: 'Productivity',
    },
    {
      accessorKey: 'team',
      header: 'Team',
    },
    {
      accessorKey: 'project',
      header: 'Project',
    },
    {
      accessorKey: 'location',
      header: 'Location',
    },
  ];

  const sampleData: MetricData[] = [
    {
      id: '1',
      date: '2024-03-15',
      accuracy: 98.5,
      rph: 42,
      productivity: 89.2,
      team: 'Alpha',
      project: 'Project X',
      location: 'US East',
    },
    {
      id: '2',
      date: '2024-03-14',
      accuracy: 97.8,
      rph: 40,
      productivity: 88.5,
      team: 'Beta',
      project: 'Project Y',
      location: 'US West',
    },
  ];

  const handleDataUpload = (data: any[]) => {
    console.log('Uploaded data:', data);
    // Handle the uploaded data here
  };

  return (
    <AuthGuard>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <DashboardHeader title="Operational Dashboard" />
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <DateRangeFilter />
            </div>

            <DashboardMetrics metrics={metrics} />
            <DashboardCharts accuracyData={accuracyData} rphData={rphData} />
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Data Import</h2>
              <FileUpload onDataUpload={handleDataUpload} />
            </div>

            <DashboardTable data={sampleData} columns={columns} />
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}

export default App;