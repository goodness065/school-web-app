import React from 'react'
import Footer from '../Components/footer/Footer'
import ConfirmationLayout from '../Components/layouts/confirmation-layout/ConfirmationLayout'
import Nav from '../Components/navbar/navber-2/Nav'

const SignupConfirmationPage = () => {
  return (
    <>
      <Nav />
      <ConfirmationLayout title="Sign Up Complete" btnText="Get Started" link="home"/>
      <Footer />
    </>
  )
}

export default SignupConfirmationPage