import React from 'react'
import PokeList from '../pokemon/PokeList'

//TODO: Add filter options
export default function DashBoard(props) {
  const { pokemons = [] } = props
  return <PokeList pokemons={pokemons} />
}
