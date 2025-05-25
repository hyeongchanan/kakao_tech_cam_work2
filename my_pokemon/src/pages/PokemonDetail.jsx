import { useLocation, useNavigate } from 'react-router-dom'
import MOCK_DATA from '../assets/mock.js/mock';
import styled from 'styled-components';
import { addPokemon, removePokemon } from '../redux/modules/selectPokemon';
import { useDispatch, useSelector } from 'react-redux';

const StImg = styled.img`
    width: 200px;
    height: 200px;
`

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const StDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: auto;
`

const Stbutton = styled.button`
    margin : 5px;
`

const Redbutton = styled.button`
    background-color: red;
    color :white;
    margin : 5px;
`

const PokemonDetail = () => {
    const query = useQuery();
    const id = parseInt(query.get('id'),10);
    const navigate = useNavigate();

    const pokemon = MOCK_DATA.find((p) => p.id === id);
    const dispatch = useDispatch();

    const selectedPokemon = useSelector((state) => state.selectPokemon.selectedPokemon);

    const isSelected = selectedPokemon.some((pokemon) => pokemon.id === id);


    return (
        <StDiv>
            <StImg src={pokemon.img_url}></StImg>
            <h1>{pokemon.korean_name}</h1>
            <h2>
                {pokemon.types.map((type) => (
                    <span key={type}>[{type}]</span>
                ))}
            </h2>
            <p>{pokemon.description}</p>

            <span key= "button" >
                <Stbutton onClick={()=> navigate(-1)}>뒤로가기</Stbutton>
                {isSelected ? 
                    <Redbutton onClick={()=> {dispatch(removePokemon(pokemon)), navigate(-1)}}>삭제하기</Redbutton>
                    :
                    <Redbutton onClick={()=> {dispatch(addPokemon(pokemon)), navigate(-1)}}>추가하기</Redbutton>
                }
                
            </span>
        </StDiv>
    )
}

export default PokemonDetail