import React from 'react'
import styled from 'styled-components'
import PokeList from '../pokemon/PokeList'

const DashBoardContainer = styled.main`
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 55px;
  }
`

export default function DashBoard(props) {
  const { pokemons = [] } = props
  return (
    <DashBoardContainer>
      <PokeList pokemons={pokemons} />
    </DashBoardContainer>
  )
}
