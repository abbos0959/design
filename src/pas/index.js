import React from 'react';
import { Chap, Con, Input } from './style';

export const Pas = () => {
  return (
    <>
      <Chap>
        <Con>
          <h1>Contact Us</h1>
          <p>Have any questions? Want help before getting started?</p>


          <div></div>
          <div></div>
        </Con>
        <Input>
        <input placeholder="Full Name"></input>
        <input placeholder="Email Address"></input>
        <p>Description</p>
        <button>Send Now</button>
        
        
        </Input>
      </Chap>
    </>
  );
};
