// src/store/recurringStore.js
import { create } from 'zustand';
import { addDays, addWeeks, addMonths, addYears, isBefore, parseISO, format } from 'date-fns';

export const useRecurringStore = create((set, get) => ({
  recurrenceType: 'Daily',
  startDate: '',
  endDate: '',
  interval: 1,
  customDays: [],
  pattern: '',

  setRecurrenceType: (val) => set({ recurrenceType: val }),
  setStartDate: (val) => set({ startDate: val }),
  setEndDate: (val) => set({ endDate: val }),
  setInterval: (val) => set({ interval: val }),
  setCustomDays: (val) => set({ customDays: val }),
  setPattern: (val) => set({ pattern: val }),

  computeRecurringDates: () => {
    const {
      recurrenceType,
      startDate,
      endDate,
      interval,
      customDays,
    } = get();

    if (!startDate) return [];

    const result = [];
    let current = parseISO(startDate);
    const maxIterations = 100;
    let count = 0;

    const end = endDate ? parseISO(endDate) : addYears(current, 1);

    while (isBefore(current, end) && count < maxIterations) {
      if (recurrenceType === 'Weekly') {
        if (customDays.includes(current.getDay())) {
          result.push(format(current, 'yyyy-MM-dd'));
        }
        current = addDays(current, 1);
      } else {
        result.push(format(current, 'yyyy-MM-dd'));
        switch (recurrenceType) {
          case 'Daily':
            current = addDays(current, interval);
            break;
          case 'Monthly':
            current = addMonths(current, interval);
            break;
          case 'Yearly':
            current = addYears(current, interval);
            break;
        }
      }
      count++;
    }

    return result;
  },
}));
