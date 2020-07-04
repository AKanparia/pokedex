import React from 'react'
import PokeList from '../pokemon/PokeList'
import styled from 'styled-components'

const Container = styled.main`
  padding-top: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding-top: 55px;
  }
`
export default function DashBoard(props) {
  const { pokemons = [] } = props
  return (
    <Container>
      <PokeList pokemons={pokemons} />
    </Container>
  )
}
