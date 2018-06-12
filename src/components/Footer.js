import React from 'react';

const footerStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center'
}
const Footer = () => {
    return (
        <div style={footerStyle}>
            <p>copyright 2018 | Links: </p>
            <p>social media links | privacy policy</p>
            <p>Twin Valley High School: 100 Main St.</p>
        </div>
    );
};

export default Footer;