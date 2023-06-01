import React from 'react'
import './Button.scss'

function Button({text, type, onClick}) {
  return (
    <div className='Button'>
      <button onClick={onClick} className={`${type}`}>{text}</button>
    </div>
  )
}

export default Button
