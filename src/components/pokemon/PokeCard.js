import React, { useEffect } from 'react'

export default function PokeCard(props) {
  const { pokemon } = props
  const { id, name, type } = pokemon

  return (
    <div>
      <div>{id}</div>
      <div>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={name.english}
        />
      </div>
      <div>{name.english}</div>
      <div>{type.toString()}</div>
    </div>
  )
}
