import { createSlice } from "@reduxjs/toolkit";

const selectPokemonSlice = createSlice({
    name: "selectPokemon",
    initialState : {
        selectedPokemon: [],
    },
    reducers:{
        addPokemon : (state,action) => {
            if (state.selectedPokemon.find((p) => p.id === action.payload.id)) {
                alert("이미 선택한 포켓몬")
                return;
            }
            if (state.selectedPokemon.length >= 6) {
                alert("최대 개수 초과")
                return;
            }

            state.selectedPokemon.push(action.payload);
            //selectPokemon : [...state.selectedPokemon, action.payload]

        },

        removePokemon : (state,action) => {
            state.selectedPokemon = state.selectedPokemon.filter((pokemon) => pokemon.id !== action.payload.id)

        }
    }
})

export const {addPokemon, removePokemon} = selectPokemonSlice.actions;
export default selectPokemonSlice.reducer;