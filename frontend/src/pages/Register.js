import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Register.css";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const hanldeClick = async () => {
    if (!username || !email || !password || !cpassword) {
      alert("please fill the required fields");
    } else if (password !== cpassword) {
      alert("Password does not match");
    } else {
      try {
        const user = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            username,
            email,
            password,
          }
        );
        setError(false);
        navigate("/login");
      } catch (err) {
        setError(true);
        setErrMsg("User Already Exist");
      }
    }
  };

  return (
    <div className="register">
      <div className="form">
        <h2>CREATE AN ACCOUNT</h2>
        <div className="inputs">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <input
            type="password"
            onChange={(e) => setCpassword(e.target.value)}
            placeholder="confirm password"
          />
        </div>
        {error && <p className="error">{errMsg}</p>}
        <p>
          By creating an account, I concent to the processing of my personal
          data in accordance with the <span>PRIVACY POLICY.</span>
        </p>
        <Link to="/login" style={{ color: "dodgerblue" }}>
          Already have an account?
        </Link>
        <br />
        <button onClick={hanldeClick}>CREATE</button>
      </div>
    </div>
  );
}

export default Register;
