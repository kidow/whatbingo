import { Button } from 'components/atoms'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'

class ButtonContainer extends Component {
  onGameStart = () => {}

  render() {
    const { onGameStart } = this
    return <Button />
  }
}

export default connect(
  ({ bingo }) => ({}),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch)
  })
)(ButtonContainer)
