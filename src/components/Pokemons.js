import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemons = (props) => {
const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {setPokemons(response.data.results)})}, 
    []);

    return (
        <div>
            <ul>
            {pokemons.map((pokemon, index) => (
                <ul key={index}>
                    {index + 1}{". "}{pokemon.name}
            </ul>
            ))}
            </ul>
        </div>
    );
}
export default Pokemons;

