import React from 'react'
import PokeCard from './PokeCard'
import styled from 'styled-components'

const PokeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`

export default function PokeList(props) {
  const { pokemons = [] } = props
  return (
    <PokeContainer>
      {pokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </PokeContainer>
  )
}
