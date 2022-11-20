import React from 'react';
import './login.scss'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";

const Login = () => {

  const {login} = useContext(AuthContext)

  const handleLogin = () => {
    login()
  }

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
            <button onClick={handleLogin()}>Login</button>
          </form>
          <p>Don’t have an account? <Link to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
