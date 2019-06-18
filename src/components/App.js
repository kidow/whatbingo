import React from 'react'
import { PageTemplate } from 'components/templates'
import { PlayersContainer } from 'containers/molecules'
import { ButtonContainer } from 'containers/atoms'
import { ContentContainer } from 'containers/organisms'

const App = () => {
  return (
    <PageTemplate>
      <ButtonContainer />
      <PlayersContainer />
      <ContentContainer />
    </PageTemplate>
  )
}

export default App
