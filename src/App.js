import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './components/layout/NavBar'
import DashBoard from './components/layout/Dashboard'
import styled from 'styled-components'

const AppContainer = styled.div`
  margin: 0;
  height: 100%;
`

function App() {
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('./pokedex.json')
      .then((res) => setPokemons(res.data.slice(0, 151)))
      .catch((error) => setError(error))
  }, [])
  return (
    <AppContainer>
      <NavBar />
      {error ? (
        <div className='error'>Error Encountered, Please try again later.</div>
      ) : (
        <DashBoard pokemons={pokemons} />
      )}
    </AppContainer>
  )
}

export default App
