import React from 'react'
import './Table.scss'
import { Cell } from 'components/atoms'

const Table = ({ cells }) => {
  const cellList = Array.from({ length: 25 }, (value, i) => {
    return <Cell key={i}>{i + 1}</Cell>
  })
  return <div className="table__container">{cellList}</div>
}

export default Table
