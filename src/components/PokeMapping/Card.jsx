import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <div className='top'>
        <img className='circle-img'
        src={require(`${props.img}`)} 
        alt="pokepic"/>
      </div>
      <div className='rightside'> 
      <h2>{props.name}</h2>
      <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Card