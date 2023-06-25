import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import api from "../../hooks/AxiosApi";

function Register() {
  const [passwordType, setPasswordType] = React.useState("password");
  const [nameInput, setNameInput] = React.useState("");
  const [usernameInput, setUsernameInput] = React.useState("");
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const Navigate = useNavigate();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const togglePassword = () => {
    console.log("Change");
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    // console.log(indentificationInput, passwordInput);
    e.preventDefault();
    setLoading(true);
    api
      .post("http://localhost:5000/register", {
        name: nameInput,
        username: usernameInput,
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        console.log("Successful Register", res.data);
        setError("");
        Navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        setError(err.response.data.message);
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <main className="Login">
      <div className="Login__form">
        <form onSubmit={handleSubmit}>
          <h1>Welcome to Chronicles!</h1>
          <p className="Login__form--error">{error}</p>
          <div className="Login__form--inputContainer">
            <input
              type="text"
              onChange={handleNameChange}
              name="name"
              id="name"
              className="Login__form--input"
              placeholder="Name"
              required
            />
            <span className="Login__form--input-focusBorder"></span>
          </div>
          <div className="Login__form--inputContainer">
            <input
              type="text"
              onChange={handleUsernameChange}
              name="username"
              id="username"
              className="Login__form--input"
              placeholder="Username"
              required
            />
            <span className="Login__form--input-focusBorder"></span>
          </div>
          <div className="Login__form--inputContainer">
            <input
              type="text"
              onChange={handleEmailChange}
              name="email"
              id="email"
              className="Login__form--input"
              placeholder="Email ID"
              required
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
              required
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
          <button
            className={`${
              loading ? "Login__form--disabled" : "Login__form--submit"
            }`}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Register"
            )}
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
      <div className="Login__content">
        <img
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Hello"
        />
      </div>
    </main>
  );
}

export default Register;
