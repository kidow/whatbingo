import React from 'react'
import './Players.scss'
import { Icon } from 'components/atoms'
import { IoIosHand } from 'react-icons/io'
import { useSelector } from 'react-redux'

const Players = _ => {
  const { playerOne, playerTwo } = useSelector(state => state.player)
  const { isStarted } = useSelector(state => state.bingo)

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
