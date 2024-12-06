import React from 'react';
import { LineChart } from '../Charts/LineChart';
import type { ChartData } from '@/types';

interface DashboardChartsProps {
  accuracyData: ChartData;
  rphData: ChartData;
}

export function DashboardCharts({ accuracyData, rphData }: DashboardChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <LineChart data={accuracyData} title="Accuracy Trends" />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <LineChart data={rphData} title="RPH Trends" />
      </div>
    </div>
  );
}