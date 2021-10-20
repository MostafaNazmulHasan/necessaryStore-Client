import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { useHistory, useLocation } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Login.css';
import firebaseConfig from './Firebase';
import { UserContext } from '../../App';

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
}
initializeAuthentication();

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div className="loginPage">
      <div className="container">
        <div className="col-md-12">
          <form className="loginForm">
            <h3 className="text-center">Login</h3>
            <br />
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <br />
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <br />
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
            </div>
            <br />
            <button type="submit" className="loginBtn ">Submit</button>
            <br />
            <br />
            <Link to="/login">
              <p className="forgotPassword text-right">
                Forgot password?
              </p>
            </Link>
            <br />
            <br />
            <p className="text-center">Or</p>
            <Button className="fbLogin"><FaFacebook />  Login with Facebook</Button>
            <br />
            <br />
            <Button className="googleLogin" onClick={handleGoogleSignIn}><FcGoogle />  Login with Google</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;