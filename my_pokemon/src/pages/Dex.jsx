import React, { useState } from 'react'
import MOCK_DATA from '../assets/mock.js/mock'
import PokemonList from './PokemonList'
import styled from 'styled-components'
import Dashboard from './Dashboard'


const StDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%
`
const Outer = styled.div`
  display: flex;
    flex-direction: column;
    padding: 20px;
`


const Dex = () => {

  const [selectedPokemon, setselectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.find((p) => p.id === pokemon.id)) {
      alert("이미 선택한 포켓몬")
      return;
    }
    if (selectedPokemon.length >= 6) {
      alert("최대 개수 초과")
      return;
    }

    setselectedPokemon([...selectedPokemon, pokemon]);
  }

  const removePokemon = (pokemon) => {
    setselectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  return (
    <Outer>
      <StDiv>
        <Dashboard selectedPokemon={selectedPokemon} removePokemon={removePokemon}/>
        <PokemonList addPokemon={addPokemon} />
      </StDiv>
    </Outer>

  )
}

export default Dex