import React from 'react'
import Modal from '../../modal/Modal'
import "./style/confirm.css"

const ConfirmationLayout = ({title, btnText, link }) => {
  return (
    <div className='confirm-main-con'>
      <Modal title={title} btnText={btnText} link={link}/>
    </div>
  )
}

export default ConfirmationLayout