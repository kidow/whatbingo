import React from 'react'
import './Button.scss'

const Button = ({ onGameStart }) => {
  return (
    <div className="button__container">
      <span onClick={onGameStart}>게임 시작</span>
    </div>
  )
}

export default Button
