import React, { useState, useEffect } from 'react';

const Pokemons = (props) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    }, []);

    return (
        <div>
            {pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}
export default Pokemons;

