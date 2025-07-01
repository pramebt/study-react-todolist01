import React from "react";

const TaskFilter = ({ activeFilter, onFilterChange, counts }) => {
  const filters = [
    { id: 'all', label: 'All Tasks', count: counts.all },
    { id: 'pending', label: 'Pending', count: counts.pending },
    { id: 'completed', label: 'Completed', count: counts.completed }
  ];

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 hover:border-amber-300'
            }`}
          >
            <span className="flex items-center gap-2">
              {filter.label}
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                activeFilter === filter.id
                  ? 'bg-white bg-opacity-20'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {filter.count}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter; 