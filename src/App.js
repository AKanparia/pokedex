import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './components/layout/NavBar'
import DashBoard from './components/layout/Dashboard'

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
    <div className='app'>
      <NavBar />
      {error ? (
        <div className='error'>Error Encountered, Please try again later.</div>
      ) : (
        <DashBoard pokemons={pokemons} />
      )}
    </div>
  )
}

export default App
