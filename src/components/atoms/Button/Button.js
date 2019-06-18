import React from 'react'
import './Button.scss'

const Button = ({ onGameStart, isStarted }) => {
  return (
    <div className="button__container">
      <span onClick={onGameStart}>
        {isStarted ? '게임 재시작' : '게임 시작'}
      </span>
    </div>
  )
}

export default Button
