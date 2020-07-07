import React, { Component } from 'react'

//TODO: Use poke api(eg: https://pokeapi.co/api/v2/pokemon/:id) to to fetch and display complete pokemon details.

export default class PokeDetails extends Component {
  render() {
    const {
      match: { params },
    } = this.props
    return <h1>Pokemon: {params.id}</h1>
  }
}
