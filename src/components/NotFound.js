import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import banner from '../img/404.png'

const NotFound = () => {
    return (
        <div style={{ margin: '15px' }}>
            <div><Link to='/' style={{ color: 'white', margin: '15px' }}><Button>Back</Button></Link></div>
            <Container style={style}>
            </Container>
        </div>
    )
}

const style = {
    backgroundImage: 'url(' + banner + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '100% 70%',
    paddingTop: '25%',
    paddingBottom: '25%',
    width: '100%',
}

export default NotFound