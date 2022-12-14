import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './Prograssbar.css'

const Prograssbar = props => {
  var stepPercentage = 75;
  const filtercode=props?.filtercode[0];
    // const {status}=filtercode;
    // console.log(status);
    
  if ( filtercode?.status=='Completed') {
    stepPercentage = 100;
  }  else {
    stepPercentage = 75;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (<>
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            <small className="step1">{index + 1}</small>
            <span>Delivery Booked</span>
          </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            <small>{index + 1}</small>
            <span>Processing Delivery</span>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            <small>{index + 1}</small>
            <span>Item Collected</span>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            <small className="step4">{index + 1}</small>
            <span>In Transit</span>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            <small>{index + 1}</small>
            <span>Item Delivered</span>
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default Prograssbar;
