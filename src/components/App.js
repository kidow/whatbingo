import React from 'react'
import { PageTemplate } from 'components/templates'
import { Players } from 'components/molecules'
import { Button } from 'components/atoms'
import { Content } from 'components/organisms'

const App = () => {
  return (
    <PageTemplate>
      <Button />
      <Players />
      <Content />
    </PageTemplate>
  )
}

export default App
