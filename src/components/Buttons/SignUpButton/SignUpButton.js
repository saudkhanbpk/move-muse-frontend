import React from 'react';
import './SignUpButton.css';

const SignUpButton = ({ onClick }) => {
  return (
    <button className="sign-up-button" onClick={onClick}>
      Create an account
    </button>
  );
};

export default SignUpButton;
