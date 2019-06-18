import React, { Component } from 'react'
import { Content } from 'components/organisms'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'
import * as playerActions from 'store/player'

class ContentContainer extends Component {
  checkBingo = () => {
    const { tableOne, tableTwo, playerOne, playerTwo } = this.props
    if (playerTwo.turn) this.checkTable(tableOne, 'one')
    if (playerOne.turn) this.checkTable(tableTwo, 'two')
  }

  checkTable = (table, player) => {
    const { PlayerActions } = this.props
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
    PlayerActions.countBingo({ player, count: row + col + cross })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { playerOne, playerTwo, BingoActions } = this.props
    if (prevProps.playerOne.turn !== this.props.playerOne.turn)
      this.checkBingo()
    if (prevProps.playerOne.count < playerOne.count) BingoActions.stackUp('one')
    if (prevProps.playerTwo.count < playerTwo.count) BingoActions.stackUp('two')
  }

  render() {
    const { tableOne, tableTwo } = this.props
    return <Content tableOne={tableOne} tableTwo={tableTwo} />
  }
}

export default connect(
  ({ bingo, player }) => ({
    playerOne: player.playerOne,
    playerTwo: player.playerTwo,
    tableOne: bingo.tableOne,
    tableTwo: bingo.tableTwo
  }),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch),
    PlayerActions: bindActionCreators(playerActions, dispatch)
  })
)(ContentContainer)
