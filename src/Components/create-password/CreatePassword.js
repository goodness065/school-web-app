import React from 'react'
import Layout from "../layouts/Layout";
import createPassword from "../../Assets/Images/create-password.png";
import lock from "../../Assets/Icons/lock.svg";
import Button from "../button/Button";
import Input from "../input/Input";
import { Link } from 'react-router-dom';

const CreatePassword = () => {
  return (
    <Layout img={createPassword}>
      <form className="form2" onSubmit={(e) => e.preventDefault()}>
        <h1 className="form-header sign">Create Password</h1>
        <Input
          icon={lock}
          type="password"
          className="input1"
          conClass="input-width1"
          placeholder="New Password"
        />
        <Input
          icon={lock}
          type="password"
          className="input1"
          conClass="input-space input-width1"
          placeholder=" Confirm Password"
        />
        
        <Link to="/Signup-confirmation"><Button text="Create Password" className="btn green-btn"/></Link>
      </form>
    </Layout>
  )
}

export default CreatePassword