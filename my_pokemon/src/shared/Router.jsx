import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "../pages/PokemonDetail";
import Dex from "../pages/dex"
import Home from "../pages/Home";


const Router = () => {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dex" element={<Dex/>}/>
        <Route path="/pokemon-detail" element={<PokemonDetail/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;