import React, { useState } from "react";
import { useContext } from "react";
import "./Login.scss";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import { Link} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
      <div className="login">
          <div className="top">
              <div className="wrapper">
                  <img
                      className="logo"
                      src={require("../../assets/vlms-logo.png").default}
                      alt=""
                  />
              </div>
          </div>
          <div className="container">
              <form action="">
                  <h1>Sign In</h1>
                  <input
                      type="email"
                      placeholder="Email or Phone number"
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="loginButton" onClick={handleLogin}>
                      Sign In
                  </button>
                  <span>
                      New to VLMS ?
                      <Link to="/register" className="link">
                          <b> Sign up now.</b>
                      </Link>
                  </span>
                  <small>
                      This page is protected by Google reCAPTCHA to ensure
                      you're not a bot. <b>Learn more</b>.
                  </small>
              </form>
          </div>
      </div>
  );
};

export default Login;
