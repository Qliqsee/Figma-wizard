import React from 'react';
import './Intro.scss';

const Intro = ({ step, title }) => {
  return (
    <div className='intro'>
      <div className='intro-step'>
        <span>Step {step}/3</span>
      </div>
      <div className='intro-title'>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Intro;
