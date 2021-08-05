import React from 'react';
import './style.css';
import pokemonType from '../../ColourTypes/ColorTypes'

const Card = ({ pokemon }) => {
    return (
        <div>
            { pokemon && 
            <div className="Card" data-testid={`Card-${pokemon.id}`} >
                <div className="Card__img">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt = 'sprite'/>
                </div>

                <div className="Card__name">
                    {pokemon.name}
                </div>

                <div className="Card__types">
                    {pokemon.types.map(type => {
                        return (
                            <div style = {{backgroundColor: pokemonType[type.type.name]}}className="Card__type">
                                {type.type.name}
                            </div>
                        )
                    })}
                </div>

            </div>
            }
        </div>
    )
}
 
export default Card;