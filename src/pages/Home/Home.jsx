import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './Home.scss';
import Button from '../../components/Button/Button';
import Step1 from '../../components/Step1/Step1';
import Step2 from '../../components/Step2/Step2';
import Step3 from '../../components/Step3/Step3';

const Home = () => {
  const [step, setStep] = useState(1);

  let completeBtn;
  let tab;

  if (step === 1) {
    completeBtn = 'Continue';
    tab = <Step1 />;
  } else if (step === 2) {
    completeBtn = 'Confirm Social Handles';
    tab = <Step2 />;
  } else {
    completeBtn = 'Complete';
    tab = <Step3 />;
  }

  const changeStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      return null;
    }
  };

  return (
    <Layout step={step}>
      <div className='home'>
        {tab}
        <div className='home-border'></div>
        <div className='home-btn' onClick={changeStep}>
          <Button color='#006AFF'>{completeBtn}</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
