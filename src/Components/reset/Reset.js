import React from 'react'
import { Link } from "react-router-dom"
import Layout from "../layouts/Layout";
import reset from "../../Assets/Images/reset.png";
import Button from "../button/Button";
import Input from "../input/Input";
import user from "../../Assets/Icons/personicon.svg";

const Reset = () => {
  return (
    <Layout img={reset}>
      <form className="form2">
        <h1 className="form-header sign">Reset Password</h1>
        <Input
          icon={user}
          type="text"
          className="input1"
          conClass="input-width1"
          placeholder="Enter your Phone number"
        />
        
        <Link to='/reset2'><Button text="Submit" className="btn green-btn"/></Link>
      </form>
    </Layout>
  )
}

export default Reset