import React from 'react'
import styled from 'styled-components'

const colors = {
  fire: '#F2C7C7', //'#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FFF3B9', //'#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#f9ecee', //'#fceaff',
  poison: '#fbdcfd', //'#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}

const Card = styled.div`
  background-color: #eee;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
  background: ${(props) => colors[props.type]};
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  perspective: 550px;

  &:hover {
    transform: scale(1.1) rotateY(180deg);
    .front {
      display: none;
    }
    .back {
      display: block;
    }
  }
  .front,
  .back {
    width: 120px;
  }

  .back {
    transform: rotateY(180deg);
    display: none;
  }

  h4.name {
    margin: 15px 0 7px;
  }
`

//TODO: Use backface-visibility: hidden;

const Image = styled.div`
  width: 120px;
  heigth: 120px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  text-align: center;

  img {
    max-width: 90%;
    margin-top: 20px;
  }
`
const Number = styled.span`
  padding: 5px 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
`
const Name = styled.h4`
  margin: 15px 0 7px;
`
const Info = styled.small`
  margin-top: 10px;
  display: block;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
const Base = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  margin: 0 auto;
`
const Label = styled.div`
  text-align: left;
`
const Value = styled.div`
  text-align: right;
`

export default function PokeCard(props) {
  const { pokemon } = props
  const { id, name, type, base } = pokemon

  return (
    <Card type={type[0].toLowerCase()}>
      <div className='front'>
        <Image>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt={name.english}
          />
        </Image>
        <Number>#{id.toString().padStart(3, 0)}</Number>
        <Name>{name.english}</Name>
        <Info>{type.join(' | ')}</Info>
      </div>
      <div className='back'>
        <Number>#{id.toString().padStart(3, 0)}</Number>
        <Name>{name.english}</Name>
        <Info>{type.join(' | ')}</Info>
        <Info>
          <Base>
            <Label>HP</Label>
            <Value>{base['HP']}</Value>
          </Base>
          <Base>
            <Label>Attack</Label>
            <Value>{base['Attack']}</Value>
          </Base>
          <Base>
            <Label>Defense</Label>
            <Value>{base['Defense']}</Value>
          </Base>
          <Base>
            <Label>Sp. Attack</Label>
            <Value>{base['Sp. Attack']}</Value>
          </Base>
          <Base>
            <Label>Sp. Defense</Label>
            <Value>{base['Sp. Defense']}</Value>
          </Base>
          <Base>
            <Label>Speed</Label>
            <Value>{base['Speed']}</Value>
          </Base>
        </Info>
        <a href='/'>
          <small>more</small>
        </a>
      </div>
    </Card>
  )
}
