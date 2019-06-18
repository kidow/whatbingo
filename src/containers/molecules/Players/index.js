import { Players } from 'components/molecules'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as playerActions from 'store/player'
import * as bingoActions from 'store/bingo'

class PlayersContainer extends Component {
  render() {
    const { playerOne, playerTwo, isStarted } = this.props
    return (
      <Players
        playerOne={playerOne}
        playerTwo={playerTwo}
        isStarted={isStarted}
      />
    )
  }
}

export default connect(
  ({ player, bingo }) => ({
    playerOne: player.playerOne,
    playerTwo: player.playerTwo,
    isStarted: bingo.isStarted
  }),
  dispatch => ({
    PlayerActions: bindActionCreators(playerActions, dispatch),
    BingoActions: bindActionCreators(bingoActions, dispatch)
  })
)(PlayersContainer)
