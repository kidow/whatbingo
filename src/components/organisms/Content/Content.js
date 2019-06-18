import React from 'react'
import './Content.scss'
import { TableContainer } from 'containers/molecules'
import { StackContainer } from 'containers/atoms'

const Content = ({ tableOne, tableTwo }) => {
  return (
    <div className="content__container">
      <TableContainer table={tableOne} order={1} />
      <StackContainer />
      <TableContainer table={tableTwo} order={2} />
    </div>
  )
}

export default Content
