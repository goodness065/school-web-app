import React from 'react'
import "./style/input.css"

const Input = ({icon, type, placeholder, className, conClass}) => {
  return (
    <div className={`input-con ${conClass}`}>
        <div className='input-img-con'>
<img src={icon} alt="#" />
        </div>
        <input type={type} placeholder={placeholder} className={`input ${className}`}/>
    </div>
  )
}

export default Input