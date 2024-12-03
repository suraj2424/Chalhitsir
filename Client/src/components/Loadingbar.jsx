import React from 'react';
import './LoadingBar.css';

const LoadingBar = ({className}) => {
  return (
    <div className={`loading-bar ${className}`}>
      <div className="bar"></div>
    </div>
  );
};

export default LoadingBar;