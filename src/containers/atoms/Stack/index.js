import { Stack } from 'components/atoms'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as playerActions from 'store/player'
import * as bingoActions from 'store/bingo'

class StackContainer extends Component {
  checkTable = () => {
    const { playerOne, playerTwo } = this.props
    if (playerOne.count === 5 && playerTwo.count === 5)
      this.onReset('무승부입니다')
    else if (playerTwo.count === 5) this.onReset('2P가 빙고를 완성했습니다')
    else if (playerOne.count === 5) this.onReset('1P가 빙고를 완성했습니다')
  }

  onReset = async str => {
    const { PlayerActions, BingoActions } = this.props
    await alert(str)
    PlayerActions.initialize()
    BingoActions.initialize()
  }

  componentDidUpdate(prevProps, prevState) {
    const { playerOne, playerTwo } = this.props
    if ((playerOne.count >= 5 || playerTwo.count >= 5) && !playerTwo.turn)
      this.checkTable()
  }

  render() {
    const { playerOne, playerTwo, stacks } = this.props
    return <Stack stacks={stacks} playerOne={playerOne} playerTwo={playerTwo} />
  }
}

export default connect(
  ({ player, bingo }) => ({
    playerOne: player.playerOne,
    playerTwo: player.playerTwo,
    stacks: bingo.stacks
  }),
  dispatch => ({
    PlayerActions: bindActionCreators(playerActions, dispatch),
    BingoActions: bindActionCreators(bingoActions, dispatch)
  })
)(StackContainer)
