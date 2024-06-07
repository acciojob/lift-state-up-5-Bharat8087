

import React from 'react';

const ColourSelector = ({ onColorSelect }) => {
  const colors = ['red', 'green', 'blue'];

  return (
    <div>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color, color: 'white', margin: '5px' }}
          onClick={() => onColorSelect(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColourSelector;
