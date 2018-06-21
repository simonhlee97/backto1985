import React from 'react';
import '../../styles/Button.css';
import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut} 
    className="btn"
  >
    Sign Out
  </button>

export default SignOutButton;
