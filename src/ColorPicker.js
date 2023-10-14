import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  const toggleColorList = () => {
    setShowColorList(!showColorList);
    setSelectedColor(null);
  };

  const buttonStyle = selectedColor
    ? { backgroundColor: selectedColor, color: '#fff' }
    : { backgroundColor: '#ff5733', color: '#fff' };

  return (
    <div>
      <button
        onClick={toggleColorList}
        style={buttonStyle}
      >
        {showColorList ? 'Pick a color' : 'Pick a color'}
      </button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`color-item${selectedColor === color ? ' selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div className="selected-color">Selected Color: {selectedColor}</div>
      )}
    </div>
  );
};

export default ColorPicker;
