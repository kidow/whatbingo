import { Cell } from 'components/atoms'
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'

class CellContainer extends Component {
  onCellClick = async () => {
    const { isStarted } = this.props
    if (!isStarted) return
  }

  render() {
    const { onCellClick } = this
    const { cells } = this.props
    // const cellList = Array.from({ length: 25 }, (value, i) => {
    //   return (
    //     <Cell key={i} onCellClick={onCellClick}>
    //       {i + 1}
    //     </Cell>
    //   )
    // })
    const cellList = cells.map((v, i) => <Cell key={i}>{v}</Cell>)
    return cellList
  }
}

export default connect(
  ({ bingo }) => ({
    tableOne: bingo.tableOne,
    tableTwo: bingo.tableTwo,
    isStarted: bingo.isStarted
  }),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch)
  })
)(CellContainer)
