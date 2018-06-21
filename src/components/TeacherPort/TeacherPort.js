import React, { Component } from 'react';
// import FolderList from './FolderList';
import '../../styles/teacherportal.css';
import strickland from '../../images/strickland.png';
import {Link} from 'react-router-dom';

class TeacherPort extends Component {
    render() {
        return (
            <div>
                <h3>Hello, Mr. Strickland</h3>
                <img src={strickland} id="profile_strick" alt="" />

                <div className="wrapper">
                    <div className="students"><Link to='/students'>my students</Link></div>
                    <div className="seating"><Link to='/seating'>my seating charts</Link></div>
                    <div className="classes"><Link to='/classes'>my classes</Link></div>
                    <div className="gradebook"><Link to='/gradebook'>my gradebook</Link></div>
                    <div className="inbox"><Link to='/inbox'>my inbox</Link></div>
                    <div className="attendance"><Link to='/attendance'>attendance</Link></div>
                    <div className="reports"><Link to='/reports'>reports</Link></div>
                </div>

            </div>
        );
    }
}

export default TeacherPort;