import React from 'react';
import './Button.scss';

const Button = ({ children, color }) => {
  return (
    <div className='button'>
      <span className='button-logout' style={{ background: color }}>
        {children}
      </span>
    </div>
  );
};

export default Button;
