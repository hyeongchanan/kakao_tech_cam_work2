import React from 'react'
import MOCK_DATA from '../assets/mock.js/mock'
import styled from 'styled-components'
import PokemonCard from './PokemonCard'

const StDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    }
    gap: 20px;
    background-color: rgb(240, 240, 240);
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
`

const PokemonList = ({addPokemon}) => {
    return (
        <StDiv>
            {MOCK_DATA.map((pokemon) => {
                return <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon} />
            })}
        </StDiv>
    )
}

export default PokemonList