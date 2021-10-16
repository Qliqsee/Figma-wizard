import React from 'react';
import './Header.scss';
import Button from '../Button/Button';

const Header = ({ step }) => {
  return (
    <div className='header'>
      <div className='header-logout'>
        <Button color='#ff6774'>Logout</Button>
      </div>

      <div className='header-nav'>
        <div className={`header-nav-item ${step === 1 && 'active'} `}>
          <span className='header-nav-item-btn'>
            {step === 1 ? '1' : <img src='./check.svg' alt='lock' />}
          </span>
          <span className='header-nav-item-text'>Verify Account</span>
        </div>

        <div className={`header-nav-item ${step === 2 && 'active'} `}>
          <span className='header-nav-item-btn'>
            {' '}
            {step === 1 || step === 2 ? (
              '2'
            ) : (
              <img src='./check.svg' alt='lock' />
            )}
          </span>
          <span className='header-nav-item-text'>Social Handles</span>
        </div>

        <div className={`header-nav-item ${step === 3 && 'active'} `}>
          <span className='header-nav-item-btn'>
            {' '}
            {step === 1 || step === 2 || step === 3 ? (
              '3'
            ) : (
              <img src='./check.svg' alt='lock' />
            )}
          </span>
          <span className='header-nav-item-text'>Business Category</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
