import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
// import SignUp from "./SignUp";
import axios from "axios";



const Login = ({ setToken }) => {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async () => {
    
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
       
      };

      const data = await axios.post(
        "https://oliomart.herokuapp.com/newbuyer/login",
        { email, password },
        config
      );

      console.log("login successful");

      localStorage.setItem("userInfo", JSON.stringify(data));
     
      setLoading(false);
      navigate("/products");
    } catch (error) {
      console.log("erorrrrr");
    }
  }; 
  return (
    <>
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3
          className="text-lg leading-6 font-medium text-trade"
          id="modal-title"
        >
          Login
        </h3>
        <small className="text-primary mt-1">
          Enter your credentials to Login
        </small>
        <div className="w-full max-w-xs">
          <form className="bg-transparent shadow-md rounded  mb-4 mt-7">
            <div className="mb-4">
              <input
                autoComplete="off"
                className="shadow appearance-none border-b-2 border-b-trade rounded w-full py-2 px-3 text-primary bg-transparent   leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Enter email "
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <input
                autoComplete="off"
                className="shadow appearance-none border-b-2 border-b-trade rounded w-full py-2 px-3 bg-transparent text-primary mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a
                className="inline-block align-baseline  text-sm mt-5  text-trade "
                href="#"
              >
                Forgot Password?
              </a>
              <p className="text-red-500 text-xs italic mt-5 ">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-trade text-black   py-2 px-4 border-rad focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submitHandler}
                isLoading={loading}
              >
                Login
              </button>
            </div>
            <div className="text-primary text-sm mt-3">
              Don't have a account ? 
            </div>
          </form>
        </div>
      </div>

    
    </>
  );
};



export default Login;


