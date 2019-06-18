import { Stack } from 'components/atoms'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as playerActions from 'store/player'

class StackContainer extends Component {
  render() {
    const { playerOne, playerTwo, stack } = this.props
    return <Stack stacks={stack} playerOne={playerOne} playerTwo={playerTwo} />
  }
}

export default connect(
  ({ player, bingo }) => ({
    playerOne: player.playerOne,
    playerTwo: player.playerTwo,
    stack: bingo.stack
  }),
  dispatch => ({
    PlayerActions: bindActionCreators(playerActions, dispatch)
  })
)(StackContainer)
