import React from 'react';
import './Spinner.scss';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', className = '' }) => {
  const sizeClass = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className={`spinner-container ${className}`}>
      <div className={`spinner ${sizeClass[size]}`}></div>
    </div>
  );
};

export default Spinner;
