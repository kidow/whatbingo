import React, { useCallback } from 'react'
import { checkCell } from 'store/bingo'
import { changeTurn } from 'store/player'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Cell.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Cell = ({ children, rowIndex, cellIndex, order }) => {
  const { isStarted } = useSelector(state => state.bingo)
  const { playerOne, playerTwo } = useSelector(state => state.player)
  const dispatch = useDispatch()

  const onCellClick = useCallback(value => {
    if (!isStarted || !value) return
    if ((playerOne.turn && order === 2) || (playerTwo.turn && order === 1))
      return alert('잘못된 차례입니다')

    if (playerOne.turn) {
      dispatch(
        checkCell({
          row: rowIndex,
          cell: cellIndex,
          player: 'one'
        })
      )
      dispatch(changeTurn())
    } else if (playerTwo.turn) {
      dispatch(
        checkCell({
          row: rowIndex,
          cell: cellIndex,
          player: 'two'
        })
      )
      dispatch(changeTurn())
    }
  })

  return (
    <span
      className={cx('cell__container', { checked: !children })}
      onClick={() => onCellClick(children)}
    >
      {children}
    </span>
  )
}

export default Cell
