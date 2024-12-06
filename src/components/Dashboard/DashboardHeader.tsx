import React from 'react';

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
      {title}
    </h1>
  );
}