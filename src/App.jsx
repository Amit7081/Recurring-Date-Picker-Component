import React, { useState } from 'react';
import { RecurrenceOptions } from './Components/RecurrenceOptions';
import { DateRangePicker } from './Components/DateRangePicker';
import { CustomizationControls } from './Components/CustomizationControls';
import { CalendarPreview } from './Components/CalendarPreview';
import { useRecurringStore } from './Store/RecurringStore';

function App() {
  const {
    recurrenceType,
    startDate,
    endDate,
    interval,
    customDays,
    pattern,
    setRecurrenceType,
    setStartDate,
    setEndDate,
    setInterval,
    setCustomDays,
    setPattern,
    computeRecurringDates
  } = useRecurringStore();

  const [datesPreview, setDatesPreview] = useState([]);

  const updatePreview = () => {
    const previewDates = computeRecurringDates();
    setDatesPreview(previewDates);
  };

  return (
    <div className="h-screen overflow-auto bg-gradient-to-br from-gray-200 to-gray-300">
      <div className="flex flex-col items-center justify-center w-auto max-w-3xl p-6 mx-auto my-10 space-y-6 bg-gray-600 border border-gray-200 shadow-xl rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">📅 Recurring Date Picker</h2>

        <section>
          <RecurrenceOptions value={recurrenceType} onChange={setRecurrenceType} />
        </section>

        <section>
          <CustomizationControls
            type={recurrenceType}
            interval={interval}
            onIntervalChange={setInterval}
            customDays={customDays}
            onCustomDaysChange={setCustomDays}
            pattern={pattern}
            onPatternChange={setPattern}
          />
        </section>

        <section>
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />
        </section>

        <div className="text-center">
          <button
            onClick={updatePreview}
            className="px-6 py-2 font-medium text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            🔍 Preview Dates
          </button>
        </div>

        <section>
          <CalendarPreview dates={datesPreview} />
        </section>
      </div>
    </div>
  );
}

export default App;
