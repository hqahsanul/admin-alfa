import React, { useState } from 'react';

const ToggleButton = ({cell}) => {
  const [isOn, setIsOn] = useState(cell.status == 'active' ? true : false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      style={{
        width: '50px',
        height: '20px',
        borderRadius: '30px',
        backgroundColor: isOn ? '#198754' : '#ccc',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '3px',
          left: isOn ? '26px' : '3px',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          transition: 'left 0.3s ease',
        }}
      />
    </div>
  );
};

export default ToggleButton;
