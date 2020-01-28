
import React, { createContext, useReducer } from 'react'
import PokeReducer from '../reducer/PokeReducer'
import axios from 'axios'

export const PokeContext = createContext()

export const PokeProvider = (props) => {
    const PokeState = []
    const [state, dispatch] = useReducer(PokeReducer, PokeState)

    const all_pokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=386')
            .then(res => {
                for (let x = 0; x < res.data.results.length; x++) {
                    axios.get(res.data.results[x].url)
                        .then(res => {
                            if (state.length === 0) {
                                dispatch({
                                    type: 'ALL_POKEMON',
                                    payload: {
                                        id: res.data.id,
                                        name: res.data.name,
                                        img: res.data.sprites.front_default,
                                        types: res.data.types
                                    }
                                })
                            }
                        })
                }
            })
    }

    return (
        <PokeContext.Provider value={{ state, all_pokemon }}>
            {props.children}
        </PokeContext.Provider>
    )
}