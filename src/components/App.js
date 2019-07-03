import React from 'react'
import { PageTemplate } from 'components/templates'
import { PlayersContainer } from 'containers/molecules'
import { ContentContainer } from 'containers/organisms'
import { Button } from 'components/atoms'

const App = () => {
  return (
    <PageTemplate>
      <Button />
      <PlayersContainer />
      <ContentContainer />
    </PageTemplate>
  )
}

export default App
