import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import HTML5 from '../img/html.png'
import CSS3 from '../img/css.png'
import JAVASCRIPT from '../img/JAVASCRIPT.jpg'
import NODEJS from '../img/NODEJS.jpg'
import REACT from '../img/react.png'
import PHONEGAP from '../img/pg.png'
import JWT from '../img/jwt.png'

const Skills = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={HTML5} />
                    <Card.Body>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <small className="text-muted">HTML5</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={CSS3} />
                    <Card.Body>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <small className="text-muted">CSS3</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={JAVASCRIPT} />
                    <Card.Body>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <small className="text-muted">JS ES6</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={REACT} />
                    <Card.Body>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <small className="text-muted">React / Context</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={NODEJS} />
                    <Card.Body>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <small className="text-muted">NodeJS / Mongo Db</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={PHONEGAP} />
                    <Card.Body>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <small className="text-muted">PhoneGap</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={JWT} style={{ padding: '7.5%' }} />
                    <Card.Body>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <small className="text-muted">Json Web Token</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Skills