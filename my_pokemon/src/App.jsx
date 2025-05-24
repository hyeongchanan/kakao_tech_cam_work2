import React from 'react'
import Router from './shared/Router'
import styled from 'styled-components'

const StDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <StDiv>
      <Router />
    </StDiv>
  )
}

export default App