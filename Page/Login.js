import React, { useState } from "react";
import { GrMail } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="login">
        <div className="login-in">
          <div className="form-login">
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="inputbox">
                <span className="login-icon">
                  <GrMail />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="inputbox">
                <span className="login-icon">
                  <AiFillLock />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>
              <div className="remember-forget">
                <label htmlFor="">
                  <input type="checkbox" />
                  Remember me{" "}
                </label>
                <Link to={""}>Forget password?</Link>
              </div>
              <button type="submit" className="sub-btn">
                Login
              </button>
              <div className="login-register">
                <p>
                  Dont have an account? <Link to={"register"}> Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
