import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Entry ({pokemon, depth}) {

  const [ isExpanded, setIsExpanded ] = useState(false)

  return (
   
    <div>
      {pokemon.evolutions ? (
        !isExpanded ? (
      <button onClick={() => setIsExpanded(!isExpanded)}>
        + {pokemon.pokemon}
      </button>  
      ) : (
        <button style={{color: 'red', border: "red 3px solid"}} onClick={() => setIsExpanded(!isExpanded)}>
        - {pokemon.pokemon}
      </button>  
      )
        ) : (
          <div style={{
            padding: "8px",
            margin: '3px',
            fontSize: 'large',
            border: '#0ee10e 3px solid',
            borderRadius: '8px',
            backgroundColor: 'rgb(39, 35, 35)',
            color: '#0ee10e',
            width: 'fit-content'
          }}>
            {pokemon.pokemon}
          </div>
        )}
      {isExpanded && 
        <div style={{paddingLeft: `${depth * 20}px`}}>
          {pokemon.evolutions?.map((pokemon, index) => {
            return <Entry key={index} pokemon={pokemon} depth={depth + 1}/>
          })}
        </div>
      }
    </div>
    )}

function ObjectOpener () {

  const pokemonList = 
   {
    pokemon: [
    {
      pokemon: "Charmander",
      evolutions: [
        {
          pokemon: "Charmeleon",
          evolutions: [
            {
              pokemon: "Charmeleon"
            },
            {
              pokemon: "Charmeleon"
            },
            {
              pokemon: "Charmeleon"
            },
            {
              pokemon: "Charmeleon"
            },
          ]
        },
        {
          pokemon: "Charizard"
        }
      ]
    },
    {
      pokemon: "Piplup",
      evolutions: [
        {
          pokemon: "Prinplup"
        },
        {
          pokemon: "Empoleon"
        }
      ]
    },
    {
      pokemon: "Turtwig",
      evolutions: [
        {
          pokemon: "Grotle"
        },
        { 
          pokemon: "Torterra"
        }
      ]
    },
    {
      pokemon: "Pikachu"
    }
  ]
}

  return (
    <>
      <Link style={{color: 'white', fontSize: 'large'}} to="/">Home</Link>
      <div>
          {pokemonList.pokemon.map((pokemon, index) => {
            console.log(pokemon)
             return <Entry key={index} pokemon={pokemon} depth={1}/>
          })}
      </div>
    </>
  )
}


export default ObjectOpener