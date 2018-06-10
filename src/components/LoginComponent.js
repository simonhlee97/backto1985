import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LoginComponent extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="password" />
                    <button>login</button>
                    <Link to='/'>forgot password?</Link>
                </form>
                
            </div>
        );
    }
}



export default LoginComponent;