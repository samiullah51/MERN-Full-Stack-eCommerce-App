import React, { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../redux/User/userTypes";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const hanldeClick = async () => {
    if (!email || !password) {
      alert("please fill the required fields");
    } else {
      try {
        const logedUser = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email,
            password,
          }
        );

        dispatch({ type: LOG_IN, user: logedUser.data });
        setError(false);
        navigate("/");
      } catch (err) {
        setError(true);
        setErrMsg("Invalid Credentials");
      }
    }
  };

  return (
    <div className="register">
      <div className="form">
        <h2>SIGN IN</h2>
        <div className="inputs">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <button onClick={hanldeClick}>LOGIN</button>
        <div className="links">
          {error && <p className="error">{errMsg}</p>}

          <a>Forgot Password?</a>
          <Link to="/register">Don't have account?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
