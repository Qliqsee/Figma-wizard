import React, { useState } from 'react';
import './Step1.scss';
import Intro from '../Intro/Intro';
import BoldButton from '../BoldButton/BoldButton';

const Step1 = () => {
  const [verficationMethod, setVerficationMethod] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div>
      <div className='home-1'>
        <Intro step='1' title='verify account' />
      </div>
      <div className='home-2'>
        <span className='gen-small-fonts'>Select verification Method</span>
        <div className='home-2-btns'>
          <div
            className='home-2-btns-btn left'
            onClick={() => setVerficationMethod(true)}
          >
            <BoldButton active={verficationMethod && 'active'}>BVN</BoldButton>
          </div>
          <div
            className='home-2-btns-btn right'
            onClick={() => {
              setShowDropDown(false);
              setVerficationMethod(false);
              return null;
            }}
          >
            <BoldButton active={!verficationMethod && 'active'}>
              Personal Account Number
            </BoldButton>
          </div>
        </div>
      </div>
      {verficationMethod ? (
        <div className='home-3'>
          <div className='home-3-form'>
            <span className='home-3-form-small'>
              Bank verification Number (11-digits)
            </span>
            <div className='home-3-form-input'>
              <input type='text' />
            </div>
          </div>
        </div>
      ) : (
        <div className='home-3'>
          <div className='home-3-form-2'>
            <div className='home-3-form-2-half left'>
              <span className='home-3-form-2-half-small'>Account Number</span>
              <div className='home-3-form-2-half-input'>
                <input type='number' className='input' />
              </div>
            </div>
            <div className='home-3-form-2-half right'>
              <span className='home-3-form-2-half-small '>Select Bank</span>
              <div className='home-3-form-2-half-input'>
                <label className='label'>
                  <select name='bank' className='select'></select>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      {verficationMethod ? (
        <div className='home-4'>
          <div className='home-4-head'>
            <span className='home-4-head-1'>
              <img src='./lock.svg' alt='lock' /> Why we need your BVN
            </span>
            <span className='home-4-head-2' onClick={handleDropDown}>
              {showDropDown ? 'Hide' : 'Show'}{' '}
              <img src='./angle-up.svg' alt='up' />
            </span>
          </div>
          {showDropDown ? (
            <div className='home-4-body'>
              <div className='home-4-body-small'>
                <span className='home-4-body-small-top'>
                  We only need access to your:
                </span>
                <span>
                  <img src='./small-check.svg' alt='check' /> Full Name
                </span>
                <span>
                  <img src='./small-check.svg' alt='check' /> Phone Number
                </span>
                <span>
                  <img src='./small-check.svg' alt='check' /> Date of Birth
                </span>
              </div>
              <p>
                <img src='./lock.svg' alt='check' />
                Your BVN does not give us access to your bank accounts or
                transactions
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Step1;
