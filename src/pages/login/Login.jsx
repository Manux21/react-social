import React from 'react';
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">

        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <h3>E-mail</h3>
            <input type="email"/>
            <h3>Password</h3>
            <input type="password"/>
            <button>Login</button>
          </form>
          <p>Don’t have an account? Register</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
