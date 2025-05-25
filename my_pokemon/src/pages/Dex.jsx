import PokemonList from './PokemonList'
import styled from 'styled-components'
import Dashboard from './Dashboard'


const StDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    max-width: 100%;
    justify-content: center;
    align-items: center;
`
const Outer = styled.div`
  display: flex;
    flex-direction: column;
    padding: 20px;
`

const Dex = () => {

  return (
      <Outer>
        <StDiv>
          <Dashboard/>
          <PokemonList/>
        </StDiv>
      </Outer>

  )
}

export default Dex