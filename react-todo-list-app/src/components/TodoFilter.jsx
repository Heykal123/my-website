import React from 'react';

function TodoFilter({ filter, onFilterChange }) {
  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg">
      <button
        onClick={() => onFilterChange('All')}
        className={`px-4 py-2 rounded-lg font-bold transition duration-150 ${filter === 'All' ? 'bg-green-500 text-white' : 'bg-white text-black-500 hover:bg-red-100'}`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('Active')}
        className={`px-4 py-2 rounded-lg font-bold transition duration-150 ${filter === 'Active' ? 'bg-green-500 text-white' : 'bg-white text-black-500 hover:bg-red-100'}`}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange('Completed')}
        className={`px-4 py-2 rounded-lg font-bold transition duration-150 ${filter === 'Completed' ? 'bg-green-500 text-white' : 'bg-white text-black-500 hover:bg-red-100'}`}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
