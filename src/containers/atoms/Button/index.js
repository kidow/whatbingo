import { Button } from 'components/atoms'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'

class ButtonContainer extends Component {
  onGameStart = async () => {
    const { BingoActions } = this.props
    BingoActions.gameStatus(true)
  }

  render() {
    const { onGameStart } = this
    const { isStarted } = this.props
    return <Button onGameStart={onGameStart} isStarted={isStarted} />
  }
}

export default connect(
  ({ bingo }) => ({
    isStarted: bingo.isStarted
  }),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch)
  })
)(ButtonContainer)
