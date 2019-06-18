import React from 'react'
import './Table.scss'
import { CellContainer } from 'containers/atoms'

const Table = ({ cells, order }) => {
  return (
    <div className="table__container">
      <CellContainer cells={cells} order={order} />
    </div>
  )
}

export default Table
