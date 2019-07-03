import React, { useEffect } from 'react'
import './Content.scss'
import { TableContainer } from 'containers/molecules'
import { Stack } from 'components/atoms'
import { useSelector } from 'react-redux'
import { stackUp } from 'store/bingo'
import { countBingo } from 'store/player'

const Content = _ => {
  const { tableOne, tableTwo, playerOne, playerTwo } = useSelector(
    state => state.bingo
  )

  const checkBingo = () => {
    if (playerTwo.turn) checkTable(tableOne, 'one')
    if (playerOne.turn) checkTable(tableTwo, 'two')
  }

  const checkTable = (table, player) => {
    let row = 0
    let col = 0
    let cross = 0

    for (let i = 0; i < table.length; i++) {
      let check = false
      for (let j = 0; j < table[i].length; j++) {
        if (table[i][j] === 0) check = true
        else {
          check = false
          break
        }
      }
      if (check) row++
    }

    for (let i = 0; i < table[0].length; i++) {
      let check = false
      for (let j = 0; j < table[i].length; j++) {
        if (table[j][i] === 0) check = true
        else {
          check = false
          break
        }
      }
      if (check) col++
    }

    let right = 0
    let left = 0

    for (let i = 0; i < table[0].length; i++) {
      if (table[i][i] === 0) right++
      if (table[table.length - i - 1][i] === 0) left++
      if (right === 5 || left === 5) cross++
    }
    if (right === 5 && left === 5) cross++
    countBingo({ player, count: row + col + cross })
  }

  useEffect(_ => {}, [checkBingo, playerOne]) // 차후 수정

  return (
    <div className="content__container">
      <TableContainer table={tableOne} order={1} />
      <Stack />
      <TableContainer table={tableTwo} order={2} />
    </div>
  )
}

export default Content
