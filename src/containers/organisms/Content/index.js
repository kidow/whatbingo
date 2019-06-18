import React, { Component } from 'react'
import { Content } from 'components/organisms'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'

class ContentContainer extends Component {
  render() {
    const { tableOne, tableTwo } = this.props
    return <Content tableOne={tableOne} tableTwo={tableTwo} />
  }
}

export default connect(
  ({ bingo }) => ({
    tableOne: bingo.tableOne,
    tableTwo: bingo.tableTwo
  }),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch)
  })
)(ContentContainer)
