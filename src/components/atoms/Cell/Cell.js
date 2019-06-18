import React from 'react'
import styles from './Cell.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Cell = ({ children, onCellClick, index }) => {
  const click = () => onCellClick(index)
  return (
    <span
      className={cx('cell__container', { checked: !children })}
      onClick={click}
    >
      {children}
    </span>
  )
}

export default Cell
