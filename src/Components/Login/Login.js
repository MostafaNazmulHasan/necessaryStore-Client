import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import firebaseConfig from "./Firebase";
import "./Login.css"

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log(errorCode, errorMessage, email, credential);
      });
    console.log("click");
  };

  return (
    <div className="loginPage">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <Form className="form">
              <h2>LOGIN</h2>
              <br />
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicCheckbox" className="d-flex ">
                <Form.Check type="checkbox" label="Remember Me" />
                <div className="forgot">
                  <Link to="/forgotpassword">Forgot Password</Link>
                </div>
              </Form.Group>

              <br />
              <Button type="submit" className="loginBtn" value="LOGIN">Login</Button>
              <br />
              <br />
              <div className="dontaccount">
                <span>Dont't have an account?</span>
                <Link to="/registration" className="createAnAccount">Create an account</Link>
                <br />
                <br />
                
                <Button onClick={googleSignIn} variant="warning" className="googleButton">
                  <FcGoogle></FcGoogle>  GOOGLE
                </Button>
              </div>
            </Form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
