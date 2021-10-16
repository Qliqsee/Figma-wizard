import React from 'react';
import Intro from '../Intro/Intro';
import './Step2.scss';

const Step2 = () => {
  return (
    <div className='step-2'>
      <Intro step='2' title='Social Handles' />
      <div className='step-2-mid-font'>
        Enter your business social media handles
      </div>
      <div className='step-2-forms'>
        <div className='step-2-form'>
          <div className='step-2-form-input'>
            <span className='step-2-form-text'>
              Choose your Abeg Tag (required)
            </span>
            <input type='text' className='input' placeholder='@' />
          </div>
        </div>

        <div className='step-2-form'>
          <div className='step-2-form-input left'>
            <span className='step-2-form-text'>Instagram</span>
            <input type='text' className='input' placeholder='@' />
          </div>

          <div className='step-2-form-input right'>
            <span className='step-2-form-text'>Twitter</span>
            <input type='text' className='input' placeholder='@' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
