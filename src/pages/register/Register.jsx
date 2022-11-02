import React from 'react';
import './register.scss'
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className='register'>
        <div className="card">
          <div className="left">

          </div>
          <div className="right">
            <h1>Create new account</h1>
            <form>
              <h3>First name</h3>
              <input type="text"/>

              <h3>Second name</h3>
              <input type="text"/>

              <h3>E-mail</h3>
              <input type="email"/>

              <h3>Password</h3>
              <input type="password"/>

              <button>Register</button>
            </form>
            <p>Already have account? <Link to='/login'>Log in</Link> </p>
          </div>
        </div>
    </div>
  );
};

export default Register;
