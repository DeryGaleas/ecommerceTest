import React from 'react'
import "./ProductCard.css"
import { useState } from 'react'
export default function ProductCard({title="", description="", price=0, image}) {
  const [isReduced, setReduced] = useState(true)

  const descriptionReduced = `${description.substring(0, 120)} Read More`
  const titleReduced = `${title.substring(0,14)}Read More`

  const handleClick = ()=>{
    setReduced(!isReduced)
  }
  return (
    <div className='card'>
        <img className="cardImage" src={image} alt={title}/>
        <h1 onClick={handleClick}>{isReduced?titleReduced:title}</h1>
        <p className='price'>{price}</p>
        <p className='description' onClick={handleClick}>{isReduced?descriptionReduced:description}</p>
        <p><button>Add to Cart</button></p>
    </div>
  )
}
