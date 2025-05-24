import React, { useState } from 'react'
import MOCK_DATA from '../assets/mock.js/mock'
import PokemonList from './PokemonList'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import PokemonContext from "../context/PokemonContext"


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
    <PokemonContext.Provider value = {{selectedPokemon,removePokemon,addPokemon}}>
      <Outer>
        <StDiv>
          <Dashboard/>
          <PokemonList/>
        </StDiv>
      </Outer>
    </PokemonContext.Provider>

  )
}

export default Dex