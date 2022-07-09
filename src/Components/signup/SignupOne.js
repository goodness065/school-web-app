import React from "react";
import "./style/signup.css"
import { Link } from "react-router-dom"
import Layout from "../layouts/Layout";
import signup from "../../Assets/Images/signup-img1.png";
import Button from "../button/Button";
import Input from "../input/Input";
import user from "../../Assets/Icons/personicon.svg";

const SignupOne = () => {
  return (
    <Layout img={signup}>
      <form className="form">
        <h1 className="form-header sign">Sign up</h1>
        <Input
          icon={user}
          type="text"
          className="input1"
          conClass="input-width1"
          placeholder=" Matriculation / Registration Number"
        />
        
        <Link to='/signup2'><Button text="Sign Up" className="btn green-btn"/></Link>
        <p className="sign-up-text">Sign Up As Lectuter</p>
      </form>
    </Layout>
  );
};

export default SignupOne;
