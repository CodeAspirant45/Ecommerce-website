import React, { useState } from "react";
import { GrMail } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { username, email, password }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
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
            <h1 style={{ paddingTop: 10 }}>Register</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="inputbox">
                <span className="login-icon">
                  <FaUserAlt />
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Username"
                />
              </div>
              <div className="inputbox">
                <span className="login-icon">
                  <GrMail />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter Email"
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
                  <input type="checkbox" />I agree the Terms and Conditions
                </label>
                <Link to={""}></Link>
              </div>
              <button type="submit" className="sub-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
