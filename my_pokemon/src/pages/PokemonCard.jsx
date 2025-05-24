import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StCard = styled.div`
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    
`
const StButton = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 5px;
`

const PokemonCard = ({ pokemon, addPokemon, removePokemon, mode ="add" }) => {

  const navigate = useNavigate();

  const showDetail = () =>{
    navigate(`/pokemon-detail?id=${pokemon.id}`)
  }

  const stopPropagation = (e) =>{
    e.stopPropagation();
  }

  return (
    <StCard onClick={showDetail}>
      <img src={pokemon.img_url} />
      <p>{pokemon.korean_name}</p>
      <p>no.{pokemon.id}</p>
      {mode === 'add' && (
        <StButton onClick={(e) =>{ stopPropagation(e); addPokemon(pokemon)}}>추가</StButton>
      )}
      {mode === 'remove' && (
        <StButton onClick={(e) =>{ stopPropagation(e); removePokemon(pokemon)}} style={{ backgroundColor: 'gray' }}>
          삭제
        </StButton>
      )}
    </StCard>
  )
}

export default PokemonCard