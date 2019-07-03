import React from 'react'
import './Row.scss'
import { Cell } from 'components/atoms'

const Row = ({ cells, order, rowIndex }) => {
  const cellList = cells.map((v, i) => (
    <Cell key={i} order={order} rowIndex={rowIndex} cellIndex={i}>
      {v}
    </Cell>
  ))
  return <div className="row__container">{cellList}</div>
}

export default Row
