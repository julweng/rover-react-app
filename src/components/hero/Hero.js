import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = () =>
  <div id="hero">
    <div className="row">
      <div className="col-12">
        <h1>Julia's Core Values</h1>
        <Button address="#values" />
      </div>    
    </div>  
  </div>;

export default Hero;
