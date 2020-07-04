import React from 'react'
import styled from 'styled-components'

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
  .logo span {
    font-size: 30px;
    font-weight: bold;
    color: red;
    letter-spacing: 5px;
  }
`
export default function NavBar() {
  return (
    <NavContainer>
      <div className='logo'>
        <span>POKEDEX</span>
      </div>
    </NavContainer>
  )
}
