import React from 'react'
import './Cell.scss'

const Cell = ({ children }) => {
  return <span className="cell__container">{children}</span>
}

export default Cell
