import React from 'react';

const tags = ['React', 'Node.js', 'MongoDB', 'Tailwind', 'JavaScript'];

const FilterBar = ({ onFilter }) => {
  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onFilter(tag)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
