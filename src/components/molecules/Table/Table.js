import React from 'react'
import './Table.scss'
import { CellContainer } from 'containers/atoms'

const Table = ({ cells }) => {
  return (
    <div className="table__container">
      <CellContainer cells={cells} />
    </div>
  )
}

export default Table
