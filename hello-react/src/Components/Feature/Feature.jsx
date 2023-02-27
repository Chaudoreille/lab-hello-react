import React from 'react'
import "./Feature.css"

const Feature = (props) => {
    const { title, image, description } = props;
  return (
    <div className='Feature'>
        <img src={image.src} alt={image.alt} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Feature