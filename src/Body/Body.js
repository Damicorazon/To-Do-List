import React, { Component } from 'react';
import Gauche from './Gauche';
import Droite from './Droite';

class Body extends Component {
  render() {
    return <div className='display'>
      <Gauche />
      <Droite />
    </div>;
  }
}

export default Body;
