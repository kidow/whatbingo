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
    let arr = Array.from({ length: 25 }, (v, i) => i + 1).sort(
      _ => 0.5 - Math.random()
    )
    let num = 0
    let bingo = []
    let arr2 = []

    for (var i = 0; i < arr.length; i++) {
      bingo[i % 5] = arr[i]
      if ((i + 1) % 5 === 0) {
        arr2[num] = bingo
        num++
        bingo = []
      }
    }

    return arr2
  }

  onReset = async str => {
    const { PlayerActions, BingoActions } = this.props
    await alert(str)
    PlayerActions.initialize()
    BingoActions.initialize()
  }

  checkTable = () => {
    const { playerOne, playerTwo } = this.props
    if (playerOne.count === 5 && playerTwo.count === 5)
      this.onReset('무승부입니다')
    else if (playerTwo.count === 5) this.onReset('2P가 빙고를 완성했습니다')
    else if (playerOne.count === 5) this.onReset('1P가 빙고를 완성했습니다')
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.isStarted && this.props.isStarted) this.createTable()
    // this.checkCell()
    if (prevProps.playerOne.count >= 5) this.checkTable()
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
