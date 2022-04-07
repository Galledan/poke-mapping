import React from 'react'
import './styles.css'
import Card from './Card'
import pokemon from './pokemon'

function createCard(poke) {
  const path = './images/'

    return <Card
    key={poke.id}
    img={path + poke.img}
    name={poke.name}
    text={poke.text}
    />
}

function Main() {
  return (
    <div>
        <h1>
            <span>Poke Mapping</span>
        </h1>
            {pokemon.map(createCard)}    
    </div>
  )
}

export default Main