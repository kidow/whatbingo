import React from 'react'
import { PageTemplate } from 'components/templates'
import { Players } from 'components/molecules'
import { ButtonContainer } from 'containers/atoms'
import { Content } from 'components/organisms'

const App = () => {
  return (
    <PageTemplate>
      <ButtonContainer />
      <Players />
      <Content />
    </PageTemplate>
  )
}

export default App
