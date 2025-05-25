
import selectPokemon from "../modules/selectPokemon";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {selectPokemon : selectPokemon}
}); 

export default store; 