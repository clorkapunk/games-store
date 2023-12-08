import React from 'react';
import {Accordion, Button, Col, Container, Image, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import gif from '../assets/distribution-gif.webp'

const Distribution = () => {
    let cards = [
        {main: 'Reach a Global Audience',second: 'Direct distribution to over 230 million Epic users across 187 countries with 16 languages supported.'},
        {main: '88%/12% Revenue Split',second: 'Keep 88% of the revenue and monitor product performance with integrated analytics dashboards.'},
        {main: 'Drive Player Engagement',second: 'Tap into store features like wishlists, achievements, store-wide promotions and more!'},
        {main: 'Worldwide E-Commerce',second: 'Epic\'s payment service supports 76 payment methods with 47 regional currencies and more on the way.'},
        {main: 'Epic Wallet',second: 'Users can load up their Wallet with funds to spend on products and services in the store, now available in more than 140 countries.'},
        {main: 'Additional Benefits',second: 'Easy IARC ratings in Epic Developer Portal, request no-cost localization for store pages and activate our Support-A-Creator affiliate network.'}
    ]



    return (
        <Container style={{minHeight: "100vh", padding: 0}}>
            <Row className="d-flex mb-3 justify-content-between" style={{position: 'sticky', top: 0, zIndex: 999}}>
                <Col md={12} style={{padding: 0}}>
                    <TypeBar/>
                </Col>
            </Row>
            <Row>


            <div
                className="distribution-card"
                style={{
                    padding: 0,
                width: "100%",
                aspectRatio: '16/8',
                background: 'linear-gradient(135deg, rgba(3,4,24,1) 0%, rgba(4,5,86,1) 50%, rgba(32,14,67,1) 100%)',
                display: 'flex',
                borderRadius: 5
            }}>
                <Image className="distribution-image" src={gif} style={{width: "50%", height: 'auto', display: "flex", justifyContent: "center", alignItems: 'center'}}/>
                <div style={{margin: "20px 20px",color: 'white', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", textAlign: 'center'}}>
                    <img  style={{width: 100}} src="https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif"/>
                    <h3 style={{marginTop: 20}} className="distribution-title">Now open to all developers and publishers</h3>
                    <Button style={{marginTop: 30}} variant='light'>SING UP TODAY</Button>
                    <p style={{marginTop: 30}}>Start distributing PC games on the Epic Games Store with our new self-service publishing tools.</p>
                </div>
            </div>
            </Row>
            <Row className="justify-content-between distribution-card-total">
                {cards.map(item =>
                    <Col md='auto' className='mt-4' style={{padding: 0}}>
                        <div className="distribution-card-small"
                            style={{
                            height: "400px",
                            width: '430px',
                            border: '1px solid #2A2A2A',
                            borderRadius: 10,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: "white",
                            padding: '40px 50px'
                        }}>
                            <img style={{width: 100}} src="https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif"/>
                            <h2>{item.main}</h2>
                            <h5 style={{opacity: 0.7}}>{item.second}</h5>
                        </div>
                    </Col>
                )}

            </Row>
            <Row>
                <Col md={12} className="mt-3" style={{
                    border: '1px solid #2A2A2A',
                    borderRadius: 15,
                    display: "flex",
                    flexDirection: 'row',
                    flexGrow: 1,
                    flexBasis: "100%",
                    padding: 40,
                    background: 'linear-gradient(90deg, rgba(22,39,49,1) 0%, rgba(18,20,21,1) 100%)'
                }}>
                    <div style={{display: 'flex', flexBasis: '50%', justifyContent: "center", alignItems: "center"}}>
                        <img style={{}} src="https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif"/>
                    </div>
                    <div style={{flexBasis: '50%',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        flexDirection: 'column',
                        color: 'white',


                    }}>
                        <h4>Join the discussion or create topics for community support around distribution</h4>
                        <a style={{cursor: "pointer", textDecoration: 'underline', marginTop: 10}}>Go to the community</a>
                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Row>

        </Container>
    );
};

export default Distribution;