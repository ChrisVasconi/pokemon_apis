import React from "react";


const FetchDisplay = (props) => {
    const { pokemon } = props
    return (
        <fieldset>
            <h1>Name: {pokemon.name}</h1>
        </fieldset>
    )
}


export default FetchDisplay;