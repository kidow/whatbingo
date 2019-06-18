import React from 'react'
import { PageTemplate } from 'components/templates'
import { Players } from 'components/molecules'
import { ButtonContainer } from 'containers/atoms'
import { ContentContainer } from 'containers/organisms'

const App = () => {
  return (
    <PageTemplate>
      <ButtonContainer />
      <Players />
      <ContentContainer />
    </PageTemplate>
  )
}

export default App
