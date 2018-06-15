import React from 'react';
import SimpleModal from '../MaterialUI/SimpleModal';
import '../styles/socialIcon.css';
import {Link} from 'react-router-dom';

const iconStyle = {
    color: '#DDDDDD'
}
const Footer = () => {
    return (
        
        <div className="site-footer row">
            <div className="column">
                <Link to='/' className="fa fa-facebook"></Link>
                <Link to='/' className="fa fa-twitter"></Link><br />
                <Link to='/' className="fa fa-google"></Link>
                <Link to='/' className="fa fa-youtube"></Link>
            </div>
            <div className="column links">
                Hill Valley High School<br/>
                100 Main Street<br />
                Hill Valley, California, 99999<br />
                (000) 555-5555<br />
                email@HillValley.hs.edu<br />
                <SimpleModal /><br />
                
                
            </div>

            <div className="column">
                home<br />
                academics<br />
                athletics<br />
                events<br />
                <a href="https://github.com/hillvalley" style={iconStyle}>
                    <i class="fab fa-github-square fa-3x"></i>
                </a>
            </div>
        </div>

    );
};

export default Footer;