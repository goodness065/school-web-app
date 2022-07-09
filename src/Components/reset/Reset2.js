import React from 'react'
import reset from "../../Assets/Images/reset.png";
import { Link } from "react-router-dom"
import Layout from "../layouts/Layout";
import Button from "../button/Button";
import Input from "../input/Input";
import user from "../../Assets/Icons/personicon.svg";
import "./styles/reset.css"

const Reset2 = () => {
  return (
    <Layout img={reset}>
      <form className="form2">
        <h1 className="form-header form-space">Reset Password</h1>
        <Input
          icon={user}
          type="text"
          className="input2"
          conClass="input-width1"
          placeholder="Phone number "
        />
        <p className="reset-text2">
          Enter the OTP Sent to your Phone Number
        </p>
          <div className="otp-input-con">
            <input type="text" placeholder="5" className="otp" />
            <input type="text" className="otp otp-space" />
            <input type="text" className="otp otp-space" />
            <input type="text" className="otp otp-space" />
          </div>
          <Link to="/signin-createPassword">
            <Button text="Submit" className="green-btn btn"/>
          </Link>
        <p className="otp-text">
          Didn't Get OTP?<span className="otp-link">Resend OTP</span>
        </p>
      </form>
    </Layout>
  )
}

export default Reset2