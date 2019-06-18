import { Table } from 'components/molecules'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'

class TableContainer extends Component {
  render() {
    const { cells, order } = this.props
    return <Table cells={cells} order={order} />
  }
}

export default connect(
  ({ bingo }) => ({
    isStarted: bingo.isStarted
  }),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch)
  })
)(TableContainer)
