import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTable, gameStatus } from 'store/bingo'
import { initialize } from 'store/player'
import './Button.scss'

const Button = () => {
  const dispatch = useDispatch()
  const { isStarted } = useSelector(state => state.bingo)

  const createArray = useCallback(() => {
    let random = Array.from({ length: 25 }, (v, i) => i + 1).sort(
      _ => 0.5 - Math.random()
    )
    let num = 0
    let dummy = []
    let result = []

    for (let i = 0; i < random.length; i++) {
      dummy[i % 5] = random[i]
      if ((i + 1) % 5 === 0) {
        result[num] = dummy
        num++
        dummy = []
      }
    }

    return result
  })

  const makeTable = useCallback(() => {
    const payload = {
      tableOne: createArray(),
      tableTwo: createArray()
    }
    dispatch(createTable(payload))
  })

  const onGameStart = useCallback(() => {
    makeTable()
    if (isStarted) initialize()
    else dispatch(gameStatus(true))
  })

  useEffect(
    _ => {
      createTable()
    },
    [isStarted]
  )

  return (
    <div className="button__container">
      <span onClick={onGameStart}>
        {isStarted ? '게임 재시작' : '게임 시작'}
      </span>
    </div>
  )
}

export default Button
