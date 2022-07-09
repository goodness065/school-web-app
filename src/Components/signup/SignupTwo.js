import React from "react";
import "./style/signup.css";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import signup from "../../Assets/Images/signup-img1.png";
import Button from "../button/Button";
import Input from "../input/Input";
import user from "../../Assets/Icons/personicon.svg";
import TextArea from "../input/TextArea";

const SignupTwo = () => {
  return (
    <Layout img={signup}>
      <form className="form">
        <h1 className="form-header form-space">Sign up</h1>
        <Input
          icon={user}
          type="text"
          className="input2"
          conClass="input-width1"
          placeholder="enter Your Matriculation / Registration Number"
        />
        <TextArea placeholder='Student’s  Details' className="textarea-con1"/>
        <p className="sign-up-text2">
          Enter the OTP Sent to your Phone Number
        </p>
        <div className="otp-flex-con">
          <div className="otp-input-con">
            <input type="text" placeholder="5" className="otp" />
            <input type="text" className="otp otp-space" />
            <input type="text" className="otp otp-space" />
            <input type="text" className="otp otp-space" />
          </div>
          <Link to="/createPassword">
            <Button text="Submit" className="green-btn"/>
          </Link>
        </div>
        <p className="otp-text">
          Didn't Get OTP?<span className="otp-link">Resend OTP</span>
        </p>
      </form>
    </Layout>
  );
};

export default SignupTwo;
