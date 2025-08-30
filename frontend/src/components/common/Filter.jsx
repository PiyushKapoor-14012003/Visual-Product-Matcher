import React from "react";

export default function FilterBar({ minScore, setMinScore, sortOrder, setSortOrder }) {
  return (
    <div className="mb-8 p-4 bg-white shadow rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Slider Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <label className="font-medium text-gray-700">
          Min Similarity Score: {minScore}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={minScore}
          onChange={(e) => setMinScore(Number(e.target.value))}
          className="w-full sm:w-48 accent-purple-600"
        />
      </div>

      {/* Sort Dropdown */}
      <div>
        <label className="mr-2 font-medium text-gray-700">Sort by:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="desc">Highest Similarity</option>
          <option value="asc">Lowest Similarity</option>
        </select>
      </div>
    </div>
  );
}
