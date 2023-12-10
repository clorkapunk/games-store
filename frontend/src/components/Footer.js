import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";

library.add(fab, faCheckSquare, faCoffee)


const Footer = () => {
    return (
        <div className="text-center" style={{background: '#202020', color: 'white'}}>
            <Container className='p-4'>
                <section className='mb-4'>
                    <Button variant="outline-light" className="m-1 footer-icon-button">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                    </Button>
                    <Button variant="outline-light" className="m-1 footer-icon-button">
                        <FontAwesomeIcon icon={['fab', 'twitter']}/>
                    </Button>
                    <Button variant="outline-light" className="m-1 footer-icon-button">
                        <FontAwesomeIcon icon={['fab', 'google']}/>
                    </Button>
                    <Button variant="outline-light" className="m-1 footer-icon-button">
                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                    </Button>
                    <Button variant="outline-light" className="m-1 footer-icon-button">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                    </Button>
                    <Button variant="outline-light" className="m-1 footer-icon-button" href="https://github.com/clorkapunk">
                        <FontAwesomeIcon icon={['fab', 'github']}/>
                    </Button>
                </section>

                <section>
                    <Form>
                        <Row className='d-flex justify-content-center' xs={1} md={3}>
                            <Col>
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </Col>
                            <Col>
                                <Form.Control type='email' placeholder="Email" className='mb-4'/>
                            </Col>
                            <Col>
                                <Button variant="outline-light" type='submit' className='mb-4'>
                                    Subscribe
                                </Button>
                            </Col>
                        </Row>
                    </Form>


                </section>


                <section className='mb-4'>
                    <p>
                        SusStore is your one-stop shop for all things gaming. We offer a wide variety of games, consoles, and accessories at competitive prices. We also have a knowledgeable staff that is always happy to help you find the perfect game for your needs.
                    </p>
                </section>

                <section className=''>
                    <Row>
                        <Col lg={3} md={6} className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase footer-link-header'>CREATOR PROGRAMS</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Media Creator
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Island Creator
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Creator Portal
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg={3} md={6} className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase footer-link-header'>SUPPORT</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Get Help
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg={3} md={6} className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase footer-link-header'>COMPANY</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Sus Newsroom
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg={3} md={6} className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase footer-link-header'>ABOUT</h5>

                            <ul className='list-unstyled mb-0 '>
                                <li>
                                    <a href='#!' className='text-white footer-link '>
                                        Terms of Srvise
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white footer-link '>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Creator Agreement
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Account Security
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white footer-link'>
                                        Community Rules
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>
            </Container>

            <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2023 Copyright:
                <a className='text-white' href='#'>
                     SusGamesStore.com
                </a>
            </div>
        </div>
    );
};

export default Footer;