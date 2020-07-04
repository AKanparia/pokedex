import React, { Fragment } from 'react'
import PokeCard from './PokeCard'

export default function PokeList(props) {
  const { pokemons = [] } = props
  return (
    <Fragment>
      {pokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </Fragment>
  )
}
