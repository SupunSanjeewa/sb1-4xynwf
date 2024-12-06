import React from 'react';
import { DataTable } from './DataTable';
import type { ColumnDef } from '@tanstack/react-table';
import type { MetricData } from '@/types';

interface DashboardTableProps {
  data: MetricData[];
  columns: ColumnDef<MetricData>[];
}

export function DashboardTable({ data, columns }: DashboardTableProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Performance</h2>
      <DataTable data={data} columns={columns} />
    </div>
  );
}