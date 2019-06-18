import React from 'react'
import './Table.scss'
import { Row } from 'components/atoms'

const Table = ({ table, order }) => {
  const rowList = table.map((v, i) => (
    <Row key={i} order={order} rowIndex={i} cells={v} />
  ))
  return <div className="table__container">{rowList}</div>
}

export default Table
