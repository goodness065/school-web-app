import React from 'react'
import "./style/textarea.css"

const TextArea = ({placeholder, className}) => {
  return (
    <textarea placeholder={placeholder} className={`textarea ${className}`}/>
  )
}

export default TextArea