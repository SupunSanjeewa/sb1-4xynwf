export interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'team_leader';
  team?: string;
}

export interface MetricData {
  id: string;
  date: string;
  accuracy: number;
  rph: number;
  productivity: number;
  team: string;
  project: string;
  location: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    borderWidth?: number;
  }[];
}