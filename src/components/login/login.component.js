import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginAdmin = () => {
    if (username.length === 0) {
      alert("Username must be filled!");
    } else if (password.length === 0) {
      alert("Password must be filled!");
    } else {
      try {
        axios
          .post("http://localhost:5000/logins", {
            username: username,
            password: password,
          })
          .then(function (response) {
            console.log(response);
            const { access_token, session_admin } = response.data;
            localStorage.setItem("accessToken", access_token);
            // localStorage.setItem("adminSession", session_admin.get("admin_id"));
            navigate("/kategori-admin");
          })
          .catch(function (error) {
            console.log(error, "error");
            if (error.response.status === 401) {
              alert("invalid credentials");
            }
          });
      } catch (error) {}
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form action="/kategori-admin">
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          {/* <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div> */}
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-primary"
              onClick={loginAdmin}
            >
              Sign In
            </button>
          </div>
          {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
        </form>
      </div>
    </div>
  );
}
