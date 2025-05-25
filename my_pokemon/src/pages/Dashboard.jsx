
import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { useSelector } from 'react-redux';

const StDashboard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(248, 248, 248);
    margin-bottom: 20px;
    border-radius: 10px;
`;

const Bag = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    }
    gap: 20px;
`

const EmptyCard = styled.div`
    height: 250px;
    @media (max-width: 768px) {
      height: 120px;
    }
    background-color: #ffffff;
    border: 2px dashed #aaa;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`;

const BallImg = styled.img`
    width: 50;
    height: 50px;
`

const Dashboard = () => {

    const selectedPokemon = useSelector((state) => state.selectPokemon.selectedPokemon);

    const emptySlots = 6 - selectedPokemon.length;

    return (
        <StDashboard>
            <h2> 나만의 포켓몬</h2>
            <Bag>
                {selectedPokemon.map((pokemon) => {
                    return (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} mode="remove" />
                    )
                })}

                {Array(emptySlots).fill(0).map((_, index) => (
                    <EmptyCard key={`empty-${index}`}>
                        <BallImg src='https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png'/>
                    </EmptyCard>
                ))}
            </Bag>
        </StDashboard>
    );
};

export default Dashboard;