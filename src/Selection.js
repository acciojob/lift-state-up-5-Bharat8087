
import React, { useEffect, useState } from 'react';

const Selection = ({ color }) => {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    setBgColor(color);
  }, [color]);

  return <div className="fix-box" style={{ backgroundColor: bgColor, width: '100px', height: '100px', margin: '10px' }}></div>;
};

export default Selection;
