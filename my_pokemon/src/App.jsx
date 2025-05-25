import React from 'react'
import Router from './shared/Router'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

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
      <ToastContainer/>
    </StDiv>
  )
}

export default App