import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import DashBoard from './components/layout/Dashboard'
import PageNotFound from './components/Error/PageNotFound'
import ErrorPage from './components/Error/ErrorPage'

const AppContainer = styled.div`
  margin: 0;
  height: 100%;
`
const Container = styled.main`
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 55px;
  }
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
        <ErrorPage />
      ) : (
        <Container>
          <Switch>
            <Route
              path='/pokedex'
              render={(props) => <DashBoard pokemons={pokemons} {...props} />}
            />
            <Route
              path='/'
              exact
              render={(props) => <DashBoard pokemons={pokemons} {...props} />}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      )}
    </AppContainer>
  )
}

export default App
