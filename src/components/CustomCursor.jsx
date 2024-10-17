import React, { useEffect, useState } from 'react';
import './CustomCursor.css'; // CSS file for styling
import cameraIcon from '../assets/6979603.png'; // Import the image

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <img src={cameraIcon} alt="Camera Icon" className="cursor-icon" />
    </div>
  );
};

export default CustomCursor;
