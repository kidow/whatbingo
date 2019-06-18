import { Button } from 'components/atoms'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'
import * as playerActions from 'store/player'

class ButtonContainer extends Component {
  onGameStart = () => {
    const { BingoActions, PlayerActions, isStarted } = this.props
    if (isStarted) {
      this.createTable()
      PlayerActions.initialize()
    } else BingoActions.gameStatus(true)
  }

  createTable = () => {
    const { BingoActions } = this.props
    const payload = {
      tableOne: this.createArray(),
      tableTwo: this.createArray()
    }
    BingoActions.createTable(payload)
  }

  createArray = () => {
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.isStarted && this.props.isStarted) this.createTable()
  }

  render() {
    const { onGameStart } = this
    const { isStarted } = this.props
    return <Button onGameStart={onGameStart} isStarted={isStarted} />
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
)(ButtonContainer)
