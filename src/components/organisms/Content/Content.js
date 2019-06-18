import React from 'react'
import './Content.scss'
import { Stack } from 'components/atoms'
import { TableContainer } from 'containers/molecules'

const Content = ({ tableOne, tableTwo }) => {
  return (
    <div className="content__container">
      <TableContainer cells={tableOne} />
      <Stack />
      <TableContainer cells={tableTwo} />
    </div>
  )
}

export default Content
