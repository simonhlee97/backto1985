import React from 'react';
import SimpleModal from '../MaterialUI/SimpleModal';
import '../styles/socialIcon.css';
import {Link} from 'react-router-dom';


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
                Twin Valley High School<br/>
                100 Main Street<br />
                Twin Valley, California, 99999<br />
                (899) 555-5555<br />
                email@twinvalley.hs.edu<br />
                <SimpleModal /><br />
                
                <Link to='https://github.com/'>Repo: <i class="fab fa-github-square fa-2x"></i></Link>
                
            </div>

            <div className="column">
                home<br />
                academics<br />
                athletics<br />
                events<br />
                privacy policy<br />
            </div>
        </div>

    );
};

export default Footer;