import React from 'react'
import "./styles/signin.css"
import { Link } from "react-router-dom"
import Layout from "../layouts/Layout";
import signin from "../../Assets/Images/signup-img1.png";
import Button from "../button/Button";
import Input from "../input/Input";
import user from "../../Assets/Icons/personicon.svg";
import lock from "../../Assets/Icons/lock.svg";

const Signin = () => {
  return (
    <Layout img={signin}>
        <form className="form2">
        <h1 className="form-header form-space">Sign In</h1>
        <Input
          icon={user}
          type="text"
          className="input1"
          conClass="input-width1"
          placeholder="Matriculation / Registration Number"
        />
        <Input
          icon={lock}
          type="password"
          className="input1"
          conClass="input-space input-width1"
          placeholder="Confirm Password"
        />
        <Link to="/home"><Button text="Sign In" className="btn green-btn"/></Link>
        <div className='forget-con'><p className="sign-up-text">Sign Up As Lectuter</p> <Link to="/reset" className='link'><p className="forget-text">Forgot Password?</p></Link></div>
        <div className='no-account-con'><p className="no-account-text">Do not have an Account?</p> <Link to="/signup"><Button className="white-btn" text="Sign Up" /></Link></div>
        </form>
    </Layout>
  )
}

export default Signin