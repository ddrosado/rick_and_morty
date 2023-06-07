import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import React from "react";

export default function Detail(props){
const{id} = useParams();

const [character, setCharacter] = React.useState({});

React.useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

return(
    <div>
        <h1>Detail</h1>
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
        <h2><img src={character.image} alt={character.name}></img></h2>
    </div>
)
}
