import React from 'react'
import './Row.scss'
import { CellContainer } from 'containers/atoms'

const Row = ({ cells, order, rowIndex }) => {
  const cellList = cells.map((v, i) => (
    <CellContainer key={i} order={order} rowIndex={rowIndex} cellIndex={i}>
      {v}
    </CellContainer>
  ))
  return <div className="row__container">{cellList}</div>
}

export default Row
