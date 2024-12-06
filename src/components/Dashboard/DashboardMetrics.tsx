import React from 'react';
import { MetricsCard } from './MetricsCard';

interface Metric {
  title: string;
  value: number;
  change: number;
  unit?: string;
}

interface DashboardMetricsProps {
  metrics: Metric[];
}

export function DashboardMetrics({ metrics }: DashboardMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric) => (
        <MetricsCard key={metric.title} {...metric} />
      ))}
    </div>
  );
}