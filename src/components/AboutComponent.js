import React from 'react';
import '../styles/aboutStyle.css';
import Slacker from '../images/strick_sm.png';
import Biff from '../images/biff.jpg';
import Marty from '../images/marty.png';
import George from '../images/george.jpg';
import Img from 'react-image';

const alumImg = {
    width: '320px',
    height: 'auto'
}

const AboutComponent = () => {
	return (
		<div className="wrapper">

			<div className="header"><h2>About Hill Valley H.S.</h2></div>

            <div className="history"><h4><span className="mySpan">History:</span> Founded in 1940 by Principal Stanford Strickland, Hill Valley High School has been the community's foundation and only hope for getting rid of slackers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis delectus et dolore blanditiis, atque tempore, pariatur commodi quo doloremque accusantium eius, cum provident harum debitis. Distinctio voluptatem ut autem.</h4></div>

            <div className="marty"><Img src={Marty} style={alumImg} /></div>

            <div className="mission"><h4><span className="mySpan">Mission:</span> To send Marty back to the future. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis delectus et dolore blanditiis, atque tempore, pariatur commodi quo doloremque accusantium eius, cum provident harum debitis. Distinctio voluptatem ut autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis delectus et dolore blanditiis, atque tempore, pariatur commodi quo doloremque accusantium eius, cum provident harum debitis.</h4></div>

            <div className="principal"><h4><span className="mySpan">From the principal, Mr. Strickland:</span> <em>Greetings. My name is Stanford S. Strickland. I have been a Hill Valley educator for over 50 years. During that time, I have handed out over 2500 detensions and suspensions. I have chaperoned the "Enchantment Under the Sea" Dance over 40 times, and it is a disaster every year. If your child is a slacker, don't bother sending him/her to my school.</em><br /><br />Sincerely, Stanford Strickland.</h4></div>

            <div className="strickland"><Img src={Slacker} /></div>

            <div className="alums">
                <Img src={Biff} style={alumImg}/>
            </div>
            
            <div className="alumni">
                <h3>Alumni Hall of Fame</h3>
					<p>George McFly</p>
					<p>Marty McFly</p>
					<p>Biff Tannen</p>
                    <p>Lorraine Baines</p>
                    <p>Goldie Wilson</p>
				
            </div>
            
            <div className="george">
                <Img src={George} style={alumImg} />
            </div>

		</div>
	);
};

export default AboutComponent;