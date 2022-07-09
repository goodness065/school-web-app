import React from 'react'
import "../layouts/styles/layout.css"

const layout = ({img, children}) => {
  return (
    <div className="layout-main-con container">
        <div className='layout-left'>
            {children}
        </div>
        <div className='layout-right'>
        <img src={img} alt="#" className='registration-img'/>
        </div>
    </div>
  )
}

export default layout