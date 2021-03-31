import React, { useEffect, useState } from 'react';
import './style.css';
import pokemonType from '../../ColourTypes/ColorTypes'
import { useParams } from 'react-router';
import axios from 'axios'
import image from '../../Images/Pikachu.gif'


const PokemonDetails = () => {
    const { id } = useParams();
    const [ pokemonDetails, setPokemonDetails ] = useState({});
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        pokemonGet();
        // eslint-disable-next-line
    }, [])

    const pokemonGet = () => {
    axios
        .get(pokemonURL)
        .then(response => {
            setPokemonDetails(response.data)
            setLoading(false)
        })
    }

    return (
        <div>
            {
                loading ? <img src = {image} style ={{display: 'block', 'marginLeft': 'auto', 'marginRight': 'auto', height: 'auto', 'marginTop': '1em'  }} alt = 'Loading'></img> : (
            <div className="DetailsCard" >
                <div className="Details__name">
                    {`${pokemonDetails.name}`}
                </div>
            <div className="Details__img">
                <img src={`https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt = 'sprite'/>
            </div>
                <div className="Details__types">
                    {pokemonDetails.types.map(type => {
                        return (
                            <div style = {{backgroundColor: pokemonType[type.type.name]}}className="Details__type">
                                {type.type.name}
                            </div>
                        )
                    })}
                </div>
                <div className = 'Details__Text'>
                    <p>{pokemonDetails.species.flavor_text}</p>
                </div>
                <div className = 'infoContainer'>
                    <div className="Details__info">
                        <div className="Details__data Details__data--id">
                            <p className = 'title'>Pokemon ID</p>
                            <p> {pokemonDetails.id} </p>
                            </div>
                        <div className="Details__data Details__data--weight">
                            <p className = 'title'>Weight</p>
                            <p> {pokemonDetails.weight} </p>
                            </div>
                        <div className="Details__data Details__data--height">
                            <p className = 'title'>Height</p>
                            <p> {pokemonDetails.height} </p>
                        </div>
                            <div className="Details__data Details__data--ability">
                            <p className = 'title'>Ability</p>
                            <p> {pokemonDetails.abilities[0].ability.name} </p>
                        </div>
                        <div className="Details__data Details__data--species">
                            <p className = 'title'>Pokemon Species</p>
                            <p> {pokemonDetails.species.name} </p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>

    );
}
export default PokemonDetails;
