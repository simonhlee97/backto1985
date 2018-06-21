import React from 'react';
import HillValley from '../../images/hillvalley.png';
import Img from 'react-image';

const imageStyle = {
    height: '20%',
    width: 'auto'
}

const LandingPage = () =>
  <div>
        <h1>Welcome</h1>
        <Img src={HillValley} style={imageStyle} />
  </div>

export default LandingPage;

