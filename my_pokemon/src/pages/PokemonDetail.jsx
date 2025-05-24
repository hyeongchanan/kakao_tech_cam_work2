import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MOCK_DATA from '../assets/mock.js/mock';
import styled from 'styled-components';

const StImg = styled.img`
    width: 200px;
    height: 200px;
`

function useQuery(){
    return new URLSearchParams(useLocation().search);
}




const PokemonDetail = () => {
    const query = useQuery();
    const id = parseInt(query.get('id'),10);
    const navigate = useNavigate();

    const pokemon = MOCK_DATA.find((p) => p.id === id);
    return (
        <>
            <StImg src={pokemon.img_url}></StImg>
            <h1>{pokemon.korean_name}</h1>
            <h2>
                {pokemon.types.map((type) => (
                    <span>[{type}]</span>
                ))}
            </h2>
            <p>{pokemon.description}</p>

            <button onClick={()=> navigate(-1)}>뒤로가기</button>
        </>
    )
}

export default PokemonDetail