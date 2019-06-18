import { Cell } from 'components/atoms'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'
import * as playerActions from 'store/player'

class CellContainer extends Component {
  onCellClick = value => {
    const {
      isStarted,
      playerOne,
      BingoActions,
      PlayerActions,
      playerTwo,
      order,
      rowIndex,
      cellIndex
    } = this.props
    if (!isStarted || !value) return
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
