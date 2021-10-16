import React from 'react';
import './BoldButton.scss';

const BoldButton = ({ children, active }) => {
  return (
    <div className={`bold ${active}`}>
      <span className='bold-btn'>{children}</span>
    </div>
  );
};

export default BoldButton;
