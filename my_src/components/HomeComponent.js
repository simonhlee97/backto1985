import React, { Component } from 'react';
import HillValley from '../images/hillvalley.png';
import Img from 'react-image';

const imageStyle = {
    height: '25%',
    width: 'auto'
}
class HomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <Img src={HillValley} style={imageStyle}/>
            </div>
        );
    }
}

export default HomeComponent;