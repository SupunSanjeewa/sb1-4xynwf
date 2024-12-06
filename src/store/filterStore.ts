import { create } from 'zustand';
import { format, subDays } from 'date-fns';

interface FilterState {
  dateRange: {
    start: string;
    end: string;
  };
  team: string | null;
  location: string | null;
  setDateRange: (start: string, end: string) => void;
  setTeam: (team: string | null) => void;
  setLocation: (location: string | null) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  dateRange: {
    start: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd'),
  },
  team: null,
  location: null,
  setDateRange: (start, end) => set({ dateRange: { start, end } }),
  setTeam: (team) => set({ team }),
  setLocation: (location) => set({ location }),
  resetFilters: () => set({
    dateRange: {
      start: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
      end: format(new Date(), 'yyyy-MM-dd'),
    },
    team: null,
    location: null,
  }),
}));