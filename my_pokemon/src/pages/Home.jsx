import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StButton = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgb(255, 0, 0);
    color: white;
    border: none;
    transition: background-color 0.3s;
`

const Stimg = styled.img`
    @media (max-width: 768px) {
        width: 350px;
    }
    width: 600px;
    margin-bottom: 20px;
`

const StDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: auto;
`

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <StDiv>
                <Stimg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" alt="Pokemon Logo" />
                <StButton onClick={() => { navigate("/Dex") }}>포켓몬 도감 시작하기</StButton>
            </StDiv>
        </>
    )
}

export default Home