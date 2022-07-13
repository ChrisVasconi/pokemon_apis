import React, { useState } from "react";
import FetchDisplay from "./FetchDisplay";
import axios from "axios"

const Fetch = () => {
    const [pokemon, setPokemon] = useState([])
    const fetchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=800&offset=0`)
            .then(response => {
                return response.json([])
            })
            .then(jsonResponse => {
                console.log(jsonResponse.results)//json response is what we are grabbing from the API, results is what I am asking for 
                setPokemon(jsonResponse.results)
            })
            .catch(err => console.log(err))
    }

    const fetchPokemonWithAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=800&offset=0`)
            .then(response => setPokemon(response.data.results))
            .catch(err => console.log(err))
    }

    return (

        <fieldset>
            <button onClick={fetchPokemon}> Fetch Pokemon </button>
            <button onClick={fetchPokemonWithAxios}> Fetch Pokemon w/ Axios </button>

            { //map function to grab an array, p is for pokemon, i is for the individual pieces
                pokemon.map((p, i) => {
                    return (
                        <h3 key={i}>{p.name}</h3>
                    )
                })
            }
            { //map function to grab an array, p is for pokemon, i is for the individual pieces
                pokemon.map((p, i) => {
                    return (
                        <h3 key={i}>{p.name}</h3>
                    )
                })
            }



        </fieldset>
    )
}




export default Fetch;