import React from 'react';
import Header from '../Header/Header';
import './Layout.scss';

const Layout = ({ children, step }) => {
  return (
    <div className='layout'>
      <div className='layout-left'>
        <img src='./image.png' alt='imag' />
      </div>
      <div className='layout-right'>
        <div className='layout1'>
          <Header step={step} />
        </div>
        <div className='layout2'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
