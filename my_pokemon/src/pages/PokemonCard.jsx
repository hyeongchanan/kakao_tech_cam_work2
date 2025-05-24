import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StCard = styled.div`
    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
    }
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
    margin: 10px;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 5px;
`

const StImg = styled.img`
  overflow-clip-margin: content-box;
  overflow: clip;
  @media (max-width: 768px) {
        height: 100%;
      }
`

const StP = styled.p`
  margin: 10px 10px 10px 0px;
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
      <StImg src={pokemon.img_url} />
      <StP>{pokemon.korean_name}</StP>
      <StP>no.{pokemon.id}</StP>
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