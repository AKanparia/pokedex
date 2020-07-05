import React, { Component } from 'react'

export default class PokeDetails extends Component {
  render() {
    const {
      match: { params },
    } = this.props
    return <h1>Pokemon: {params.id}</h1>
  }
}
