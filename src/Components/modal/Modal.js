import React from 'react'
import "./style/modal.css"
import img from "../../Assets/Images/confirm-img.png"
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Modal = ({title, btnText, link, setIsOpen }) => {
  return (
    <div className='modal'>
        <p className='modal-title'>{title}</p>
        <div className="confirm-img-con"><img src={img} alt ="#" className="confirm-img"/></div>
        <div className="modal-close"><Link to={`/${link}`}><Button text={btnText} className="green-btn" onClick={() => setIsOpen(false)}/></Link></div>
    </div>
  )
}

export default Modal