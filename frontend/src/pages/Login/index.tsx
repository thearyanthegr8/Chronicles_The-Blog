import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [passwordType, setPasswordType] = React.useState("password");
  const [passwordInput, setPasswordInput] = React.useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const togglePassword = () => {
    console.log("Change");
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <main className="Login">
      <div className="Login__form">
        <form onSubmit={() => {}}>
          <h1>Welcome back</h1>
          <div className="Login__form--inputContainer">
            <input
              type="text"
              name="indentification"
              id="identification"
              className="Login__form--input"
              placeholder="Email or username"
            />
            <span className="Login__form--input-focusBorder"></span>
          </div>
          <div className="Login__form--inputContainer">
            <input
              type={passwordType}
              onChange={handlePasswordChange}
              name="password"
              id="password"
              className="Login__form--input"
              placeholder="Password"
            />
            <button
              onClick={() => togglePassword()}
              type="button"
              className="Login__form--input-eye"
            >
              {passwordType === "password" ? (
                <span data-icon={String.fromCharCode(59636)} />
              ) : (
                <span data-icon={String.fromCharCode(59637)} />
              )}
            </button>
            <span className="Login__form--input-focusBorder"></span>
          </div>
          <div className="Login__form--rowContainer">
            <div className="Login__form--checkBox">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/" className="Login__form--forgotPassword">
              Forgot Password
            </Link>
          </div>
          <button className="Login__form--submit">Log in</button>
        </form>
        <p>
          Don't have an account? <Link to="/">Sign up for free</Link>
        </p>
      </div>
      <div className="Login__content">
        <img
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Image"
        />
      </div>
    </main>
  );
};

export default Login;
