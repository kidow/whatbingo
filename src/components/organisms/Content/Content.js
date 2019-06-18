import React from 'react'
import './Content.scss'
import { Table } from 'components/molecules'
import { Stack } from 'components/atoms'

const Content = () => {
  return (
    <div className="content__container">
      <Table />
      <Stack />
      <Table />
    </div>
  )
}

export default Content
