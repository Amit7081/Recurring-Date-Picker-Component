import React from 'react';

export function RecurrenceOptions({ value, onChange }) {
  const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  return (
    <div className="w-[800px] max-w-md p-4 bg-white border border-gray-200 shadow-md rounded-2xl">
      <h3 className="mb-3 text-sm font-medium text-gray-700">Recurrence Type</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
          >
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="accent-blue-600"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
