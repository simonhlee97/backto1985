import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/LoginStyle.css';
const loginForm = {
    marginTop: '1em',
    marginBottom: '1em'
}
class LoginComponent extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <p style={loginForm}><input id="email" type="text" placeholder="email"/></p>
                    <p style={loginForm}><input id="password" type="text" placeholder="password" /></p>
                    <p style={loginForm}><input type="button" id="loginsubmit" value="login" /></p>
                    <p style={loginForm}><Link to='/'>Forgot password? You're probably a slacker</Link></p>
                </form>
                
            </div>
        );
    }
}
export default LoginComponent;