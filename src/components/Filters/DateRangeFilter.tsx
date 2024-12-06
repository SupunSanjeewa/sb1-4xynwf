import React from 'react';
import { useFilterStore } from '@/store/filterStore';

export function DateRangeFilter() {
  const { dateRange, setDateRange } = useFilterStore();

  return (
    <div className="flex gap-4">
      <div>
        <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          value={dateRange.start}
          onChange={(e) => setDateRange(e.target.value, dateRange.end)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
      <div>
        <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="date"
          id="end-date"
          value={dateRange.end}
          onChange={(e) => setDateRange(dateRange.start, e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
    </div>
  );
}