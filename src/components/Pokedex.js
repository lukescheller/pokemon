import React, { useContext, useEffect, useState } from 'react'
import { PokeContext } from '../context/PokeContext'
import { Button, Container, Alert } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Pokedex = () => {
    const { state, all_pokemon } = useContext(PokeContext)

    useEffect(() => {
        all_pokemon()
    }, [])

    const [type, setType] = useState([])
    const [all, setAll] = useState([])
    const [inp, setInp] = useState('')
    let [search, setSearch] = useState(true)
    const [found, setFound] = useState({})

    const getType = e => {
        const Type = e.target.value
        let type = []
        for (let x = 0; x < state.length; x++) {
            // console.log(state[x].types.length)
            if (state[x].types.length === 1) {
                if (state[x].types[0].type.name === Type) {
                    type.push(state[x])
                }
            }
            if (state[x].types.length === 2) {
                if (state[x].types[0].type.name === Type) {
                    type.push(state[x])
                }
                if (state[x].types[1].type.name === Type) {
                    type.push(state[x])
                }
            }
        }
        type.sort(function (a, b) {
            return a.id - b.id
        })
        setType(type)
        setAll([])
        setFound([])
    }

    let types = []
    if (state.length === 386) {
        for (let x = 0; x < state.length; x++) {
            for (let y = 0; y < state[x].types.length; y++) {
                if (!types.includes(state[x].types[y].type.name)) {
                    types.push(state[x].types[y].type.name)
                }
            }
        }
    }

    let All = []
    const getAll = () => {
        for (let x = 0; x < state.length; x++) {
            All.push(state[x])
        }
        All.sort(function (a, b) {
            return a.id - b.id
        })
        setAll(All)
        setType([])
        setFound([])
    }

    const input = e => {
        setInp(e.target.value.toLowerCase())
    }

    const submit = () => {
        for (let x = 0; x < state.length; x++) {
            if (state[x].name === inp) {
                setFound(state[x])
                setType([])
                setAll([])
                console.log(found)
                setSearch(true)
                return
            } else {
                setSearch(false)
                setFound({})
            }
        }
    }

    return (
        <Container style={{ marginTop: '20px' }}>
            {/*search result*/}
            {search ? '' : <Alert style={{ textAlign: 'center' }} variant='danger'>Name does not exist</Alert>}

            {/*search display*/}
            {state.length !== 386 ? 'loading....' :
                <div style={{ border: '1px solid white', display: 'flex', justifyContent: 'center' }}>
                    <input type='text' name='input' style={{ width: '45%', margin: '5px', marginBottom: '20px' }} onChange={input} /><button style={{ margin: '5px', marginBottom: '20px' }} onClick={submit}>Search!</button>
                </div>
            }

            {/*button display*/}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', border: '1px solid white' }}>
                {state.length !== 386 ? '' : <Button variant='warning' style={{ margin: '5px' }} onClick={getAll}>All</Button>}
                <div style={{ border: '1px solid white', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}></div>
                {state.length !== 386 ? '' :
                    types.map((t, index) => (
                        <Button key={index} value={t} onClick={getType} style={{ margin: '5px' }}>{t.charAt(0).toUpperCase() + t.slice(1)}</Button>
                    ))}
            </div>

            {/*pokemon display*/}
            <div style={{ border: '1px solid white', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
                {type.map(p => (
                    <div key={p.id} >
                <Link to={'pokecard/' + p.name}> <img src={p.img} alt='' /></Link>
                    </div>
                ))}
                {all.map(p => (
                    <div key={p.id} >
                        <Link to={'pokecard/' + p.name}><img src={p.img} alt='' /></Link>
                    </div>
                ))}

                {/*searched pokemon*/}
                {
                    <div style={{ border: '1px solid white' }}>
                <Link to={'pokecard/' + found.name}><img src={found.img} alt='' /></Link>
                    </div>
                }
            </div>
        </Container >
    )
}

export default Pokedex