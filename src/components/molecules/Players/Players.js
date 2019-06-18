import React from 'react'
import './Players.scss'
import { Icon } from 'components/atoms'
import { IoIosHand } from 'react-icons/io'

const Players = ({ playerOne, playerTwo, isStarted }) => {
  return (
    <div className="players__container">
      <div className="player">
        <span>1P</span>
        {playerOne.turn && isStarted && <Icon Name={IoIosHand} size={25} />}
      </div>
      <div className="player">
        <span>2P</span>
        {playerTwo.turn && <Icon Name={IoIosHand} size={25} />}
      </div>
    </div>
  )
}

export default Players
