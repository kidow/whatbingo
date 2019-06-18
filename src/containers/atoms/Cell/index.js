import { Cell } from 'components/atoms'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'
import * as playerActions from 'store/player'

class CellContainer extends Component {
  onCellClick = async index => {
    const {
      isStarted,
      playerOne,
      BingoActions,
      PlayerActions,
      playerTwo,
      tableOne,
      tableTwo,
      order
    } = this.props
    if (!isStarted) return
    console.log(playerOne.turn && order === 2, playerTwo.turn && order === 1)
    if ((playerOne.turn && order === 2) || (playerTwo.turn && order === 1))
      return alert('잘못된 차례입니다')

    if (playerOne.turn) {
      BingoActions.checkCell({ index, player: 'one' })
      PlayerActions.changeTurn()
    } else if (playerTwo.turn) {
      BingoActions.checkCell({ index, player: 'two' })
      PlayerActions.changeTurn()
    }
  }

  render() {
    const { onCellClick } = this
    const { cells, order } = this.props
    const cellList = cells.map((v, i) => (
      <Cell onCellClick={onCellClick} index={i} key={i}>
        {v}
      </Cell>
    ))
    return cellList
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
