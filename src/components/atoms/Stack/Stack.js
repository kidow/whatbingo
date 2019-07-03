import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BingoActions from 'store/bingo'
import PlayerActions from 'store/player'
import './Stack.scss'

const Stack = ({ stacks }) => {
  const { playerOne, playerTwo } = useSelector(state => state.player)
  const dispatch = useDispatch()

  const checkTable = () => {
    if (playerTwo.count === 5) onReset('2P가 빙고를 완성했습니다')
    else if (playerOne.count === 5) onReset('1P가 빙고를 완성했습니다')
  }

  const onReset = async str => {
    await alert(str)
    dispatch(PlayerActions.initialize())
    dispatch(BingoActions.initialize())
  }

  useEffect(_ => {}, [])

  const stackList = stacks.map((item, i) => <div key={i} className={item} />)
  return <div className="stack__container">{stackList}</div>
}

export default Stack
