import React from 'react'
// import pokemons from './data'

const Pokemon = (props) => {
  const {name, type , averageWeight: {value , measurementUnit}, image } = props.pokemon ;

  return (
      <div className='Pokemon'>
      <h2>{name}</h2>
      <h2>{type}</h2>
      <h2>{value}</h2>
      <h2>{measurementUnit}</h2>
      <img src={image} alt={`Foto Pokemon: ${name}`}/>
      </div>
  )
}

export default Pokemon