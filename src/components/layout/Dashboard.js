import React from 'react'
import PokeList from '../pokemon/PokeList'

export default function DashBoard(props) {
  const { pokemons = [] } = props
  return (
    <div>
      <PokeList pokemons={pokemons} />
    </div>
  )
}
