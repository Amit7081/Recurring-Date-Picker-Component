import React from 'react';

export function CustomizationControls({
  type,
  interval,
  onIntervalChange,
  customDays,
  onCustomDaysChange,
  pattern,
  onPatternChange,
}) {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="max-w-md p-6 space-y-6 bg-white border border-gray-200 shadow-md rounded-2xl w-[800px]">
      {/* Interval Control */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Repeat Every
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={interval}
            min={1}
            onChange={(e) => onIntervalChange(parseInt(e.target.value))}
            className="w-20 px-3 py-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-600">{type.toLowerCase()}(s)</span>
        </div>
      </div>

      {/* Weekly Options */}
      {type === 'Weekly' && (
        <div>
          <p className="mb-2 text-sm font-medium text-gray-700">Select days of the week:</p>
          <div className="grid grid-cols-4 gap-2">
            {weekDays.map((day, i) => (
              <label
                key={day}
                className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={customDays.includes(i)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onCustomDaysChange([...customDays, i]);
                    } else {
                      onCustomDaysChange(customDays.filter((d) => d !== i));
                    }
                  }}
                  className="accent-blue-500"
                />
                {day}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Monthly Pattern Input */}
      {type === 'Monthly' && (
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Pattern (e.g., "Second Tuesday")
          </label>
          <input
            type="text"
            value={pattern}
            onChange={(e) => onPatternChange(e.target.value)}
            placeholder="e.g., First Monday"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </div>
  );
}
