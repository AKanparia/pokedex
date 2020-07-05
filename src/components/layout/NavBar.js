import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavContainer = styled.header`
  position: fixed;
  height: 75px;
  margin: 0 auto;
  width: 100%;
  background: #fff;
  border-bottom: 2px solid red;
  z-index: 25;

  @media (max-width: 768px) {
    height: 50px;
  }

  .logo {
    width: 30%;
    float: left;
    line-height: 75px;
    text-align: center;
    @media (max-width: 768px) {
      width: 100%;
      line-height: 50px;
    }
  }

  .logo a {
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    color: red;
    letter-spacing: 3px;
  }

  .logo img {
    max-width: 30px;
    margin: 0px 10px;
  }
`
export default function NavBar() {
  return (
    <NavContainer>
      <div className='logo'>
        <Link to='/pokedex'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Pokeball.png'
            alt='Pokeball'
          />
          <span>Pokédex</span>
        </Link>
      </div>
    </NavContainer>
  )
}
