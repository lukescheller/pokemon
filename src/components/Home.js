import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Skills from './Skills'
import TrainerStats from './TrainerStats'
import Banner from '../img/banner.png'
import pd from '../img/pokedex.png'
import ig from '../img/ig.png'
import git from '../img/git.png'

const Home = () => {
    return (
        <Container>
            <Jumbotron style={style}>
            </Jumbotron>

            <Row style={{ border: '1px solid none', display: 'flex', justifyContent: 'flex-start', textAlign: 'center' }}>
                <Col style={{ border: '1px solid none' }}><a href='https://www.instagram.com/_the_meme_mayor_/'><img src={ig} alt='' width='70px' /></a></Col>
                <Col style={{ border: '1px solid none' }}><Link to='/pokedex'><img src={pd} alt='' width='100px' style={{ position: 'relative', bottom: '10px' }} /></Link></Col>
                <Col style={{ border: '1px solid none' }}><a href='https://github.com/lukescheller'><img src={git} alt='' width='70px' /></a></Col>
            </Row>

            <div style={skTitle}>
                <h1 style={{ marginBottom: '20px' }}>Trainer Profile</h1>
            </div>
            <TrainerStats />

            <div style={skTitle}>
                <h1 style={{ marginBottom: '20px' }}>Gym Badges</h1>
            </div>
            <Skills />

        </Container >
    )
}

const skTitle = {
    border: '1px solid white',
    textAlign: 'left',
    opacity: '0.2'
}

const style = {
    backgroundImage: 'url(' + Banner + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '100% 100%',
    paddingTop: '25%',
    paddingBottom: '25%',
    width: '100%',
};

export default Home