import React, { useContext, useState } from "react";
import loginContext from "../context/login/loginContext";

function Login(props) {
  const Login = useContext(loginContext);
  const [edata, seteData] = useState({ email: "", password: "" });
  const onChange = (e) => {
    seteData({ ...edata, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: edata.email, password: edata.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      console.log("login successfully");
      window.location.replace("/")
    } else {
      alert("Invalid credentials");
    }
   
  };

  return (
    <div>
      <form onSubmit={handleClick} className="container-sm mt-5 ">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={onChange}
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {};

export default Login;
