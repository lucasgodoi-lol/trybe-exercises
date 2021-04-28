import Pokemon from './Pokemon'
import React from 'react'
import pokemons from './data'
class Pokedex extends React.Component {
    render() {
        return (
        <div className='father'>
        {pokemons.map((pokemon) => <Pokemon pokemon = {pokemon} />)}
      </div>
      )
    }
}

export default Pokedex