// src/components/CalendarPreview.js
import React from 'react';

export function CalendarPreview({ dates }) {
  return (
    <div className="max-w-md p-6 bg-white border border-gray-200 shadow-md rounded-2xl w-[800px]">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">📅 Recurring Dates Preview</h3>

      {dates.length > 0 ? (
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          {dates.map((date, idx) => (
            <li key={idx} className="leading-5">
              {date}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-sm italic text-gray-500">No dates selected yet.</div>
      )}
    </div>
  );
}
 