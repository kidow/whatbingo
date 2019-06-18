import { Cell } from 'components/atoms'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'
import * as playerActions from 'store/player'

class CellContainer extends Component {
  checkBingo = () => {
    const { tableOne, tableTwo, playerOne, playerTwo } = this.props
    if (playerOne.turn) this.checkTable(tableOne, 'playerOne')
    if (playerTwo.turn) this.checkTable(tableTwo, 'playerTwo')
  }

  checkTable = (table, player) => {
    const { BingoActions, PlayerActions, playerOne, playerTwo } = this.props
    PlayerActions.countBingo({ player, count: 0 })
    // let row = 0
    // let col = 0

    for (let i = 0; i < table.length; i++) {
      let check = false
      for (let j = 0; j < table[i].length; j++) {
        if (table[i][j] === 0) check = true
        else check = false
      }
      if (check) PlayerActions.countBingo({ player, count: player.count + 1 })
    }

    for (let i = 0; i < table[0].length; i++) {
      let check = false
      for (let j = 0; j < table[i].length; j++) {
        if (table[j][i] === 0) check = true
        else check = false
      }
      if (check)
        PlayerActions.countBingo({
          player,
          count: player.count + 1
        })
    }

    let right = 0
    let left = 0

    for (let i = 0; i < table[0].length; i++) {
      if (table[i][i] === 0) right++
      if (table[table.length - i - 1][i] === 0) left++
    }
    if (right === 5 && left === 5)
      PlayerActions.countBingo({
        player,
        count: player.count + 1
      })
  }

  onCellClick = (index, value) => {
    if (!value) return
    const {
      isStarted,
      playerOne,
      BingoActions,
      PlayerActions,
      playerTwo,
      tableOne: o,
      tableTwo: t,
      order,
      rowIndex,
      cellIndex
    } = this.props
    if (!isStarted) return
    if ((playerOne.turn && order === 2) || (playerTwo.turn && order === 1))
      return alert('잘못된 차례입니다')

    if (playerOne.turn) {
      BingoActions.checkCell({ row: rowIndex, cell: cellIndex, player: 'one' })
      PlayerActions.changeTurn()
    } else if (playerTwo.turn) {
      BingoActions.checkCell({
        row: rowIndex,
        cell: cellIndex,
        player: 'two'
      })
      PlayerActions.changeTurn()
    }
  }

  componentWillUpdate() {
    this.checkBingo()
  }

  render() {
    const { onCellClick } = this
    const { children } = this.props
    return <Cell onCellClick={onCellClick}>{children}</Cell>
  }
}

export default connect(
  ({ bingo, player }) => ({
    tableOne: bingo.tableOne,
    tableTwo: bingo.tableTwo,
    isStarted: bingo.isStarted,
    playerOne: player.playerOne,
    playerTwo: player.playerTwo
  }),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch),
    PlayerActions: bindActionCreators(playerActions, dispatch)
  })
)(CellContainer)
