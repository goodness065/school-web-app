import React from 'react'
import Footer from '../Components/footer/Footer'
import ConfirmationLayout from '../Components/layouts/confirmation-layout/ConfirmationLayout'
import Nav from '../Components/navbar/navber-2/Nav'

const SigninConfirmationPage = () => {
  return (
    <>
      <Nav />
      <ConfirmationLayout title="Password Rest Successful" btnText="Sign In" link="signin"/>
      <Footer />
    </>
  )
}

export default SigninConfirmationPage