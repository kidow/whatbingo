import React from 'react'
import './Cell.scss'

const Cell = ({ children, onCellClick }) => {
  return (
    <span className="cell__container" onClick={onCellClick}>
      {children}
    </span>
  )
}

export default Cell
