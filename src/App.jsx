import './file.css'

import React, { useState } from 'react';

const BackgroundColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className='mainDiv' style={{ backgroundColor, minHeight: '100vh', transition: 'background-color 0.5s' }} >
      <h1>Background Color Changer</h1>
      <button className='redButton' onClick={() => handleColorChange('red')}>Red</button>
      <button onClick={() => handleColorChange('blue')}>Blue</button>
    </div>
  );
};

export default BackgroundColorChanger;
