import React from 'react'
import "./IconItem.css"

const IconItem = ({ urlimg, name }) => {
  return (


    <div className='icon-item'>
        <img src={urlimg} alt="img.png" />
        <p>{name}</p>
    </div>

  )
}

export default IconItem