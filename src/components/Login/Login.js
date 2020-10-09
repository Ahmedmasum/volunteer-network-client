import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import logoImage from "../../Resources/logos/Group 1329.png";
import "./Login.css";
import googleLogo from "../../Resources/logos/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
toast.configure();
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photoURL: "",
    error: "",
    success: "",
  });

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  var provider = new firebase.auth.GoogleAuthProvider();
  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photoURL: photoURL,
          success: true,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        toast.success(" Signed In Using google Successfully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        history.replace(from);
      })
      .catch(function (error) {
        const signedInUser = {
          isSignedIn: false,
        };
        signedInUser.error = error.message;
        signedInUser.success = false;
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        toast.error(error, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  return (
    <Container className="login-container">
      <Link to="/">
        <img className="logoImg" src={logoImage} alt="logoImage" />
      </Link>{" "}
      <Container className="loginBox-container">
        <h5>Login With</h5>
        <div onClick={googleSignIn} className="google-button">
          <img src={googleLogo} alt="" />
        </div>
      </Container>
    </Container>
  );
};

export default Login;
