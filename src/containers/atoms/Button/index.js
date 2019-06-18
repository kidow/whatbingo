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
    let result = new Array(25)
    for (let i = 0; i < result.length; i++) result[i] = i + 1
    result.sort(_ => 0.5 - Math.random())
    // let twoDimenArray = []
    // let x = 0
    // let insert = []
    // let called = ''

    // for (let i = 0; i < oneDimenArray.length; i++) {
    //   insert[i % 5] = oneDimenArray[i]
    //   if ((i + 1) % 5 === 0) {
    //     twoDimenArray[x] = insert
    //     x++
    //     insert = []
    //   }
    // }
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
  ({ bingo }) => ({
    tableOne: bingo.tableOne,
    tableTwo: bingo.tableTwo,
    isStarted: bingo.isStarted
  }),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch),
    PlayerActions: bindActionCreators(playerActions, dispatch)
  })
)(ButtonContainer)
