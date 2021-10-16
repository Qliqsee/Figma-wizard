import React, { useState } from 'react';
import './Step3.scss';
import Intro from '../Intro/Intro';
import BoldButton from '../BoldButton/BoldButton';

const Step3 = () => {
  const [yes, setYes] = useState(false);
  return (
    <div className='step-3'>
      <Intro step='3' title='business category' />
      <div className='step-3-form'>
        <div className='step-3-form-input left'>
          <span className='step-3-form-text'>Type of your business</span>
          <span className='step-3-form-text'></span>
          <label htmlFor='' className='label'>
            <select name='' id='' className='select'></select>
          </label>
        </div>
        <div className='step-3-form-input right'>
          <span className='step-3-form-text'>Business Category</span>
          <label htmlFor='' className='label'>
            <select name='' id='' className='select'></select>
          </label>
        </div>
      </div>

      <div className='step-3-2'>
        <span className='step-3-2-text'>
          Do you use POS machine for your business?
        </span>
        <div>
          {' '}
          <div className='step-3-2-btn' onClick={() => setYes(true)}>
            <BoldButton active={yes && 'active'}>Yes</BoldButton>{' '}
          </div>
          <div className='step-3-2-btn' onClick={() => setYes(false)}>
            <BoldButton active={!yes && 'active'}>No</BoldButton>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
