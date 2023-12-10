import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {fetchGameById, fetchGames, putItemToBasket} from "../http/contentAPI";
import {Context} from "../index";
import TypeBar from "../components/TypeBar";

const GamePage = observer(() => {
    const {user, content} = useContext(Context)
    const location = useLocation();
    const {id} = useParams()
    const navigate = useNavigate()
    const [game, setGame] = useState({
        id: null,
        title: "",
        year: "",
        description: "",
        cardImg: "",
        mainImg: "",
        smallImg: "",
        tags: [],
        price: ""
    })

    useEffect(() => {
        fetchGameById(id).then(data => setGame(data))
    }, [location.pathname]);


    const addItemToBasket = (id, type) => {
        if(!user.isAuth) {
            alert("Your are not logged in!")
            return
        }
        putItemToBasket(user.user.id, id, type).then(data => {
            content.setBasket(data.basketItems)
        })
    }

    const chars = [
        ['OS', 'Windows 10', 'Windows 10'],
        ['Processor', 'Intel Core i5-3470 or AMD Ryzen 5 1400', 'Intel Core i5-6600 or AMD Ryzen 5 2600'],
        ['Memory', '8 GB RAM', '12 GB RAM'],
        ['Graphics', 'NVIDIA GeForce GTX 660, 2 GB or AMD Radeon HD 7870, 2 GB', 'NVIDIA GeForce GTX 1070, 8 GB or AMD Radeon RX Vega 56, 8 GB'],
        ['Other', '720p Low @ 30 FPS', '1080p High @ 60 FPS']
    ]




    return (
        <Container className="pb-5 w-75 text-white" fluid>
            <Row className="d-flex mb-3 justify-content-between" style={{position: 'sticky', top: 0, zIndex: 999}}>
                <Col md={12} style={{padding: 0}}>
                    <TypeBar/>
                </Col>
            </Row>
            <div style={{fontSize: "3rem", fontWeight: "bold", color: "white"}}>{game.title}</div>
            <hr style={{background: 'white', height: 2, opacity: 0.8}}/>
            <Row className="d-flex mt-4 justify-content-between">
                <Col md={8} style={{}}>
                    <Row>
                        <Image src={"http://localhost:4444/" + game.mainImg} style={{
                            borderRadius: 10,
                            width: "100%",
                            height: 500,
                            objectFit: "cover",
                            padding: 0
                        }}/>
                        <div style={{marginTop: 30, padding: 0, fontSize: '1.2em'}}>
                            {game.description}
                        </div>
                        <div style={{
                            display: "flex",
                            background: '#202020',
                            marginTop: 30,
                            padding: 10,
                            borderRadius: 5
                        }}>
                            <div style={{paddingLeft: 30, borderLeft: "1px solid grey", width: "50%"}}>
                                <div>Genres</div>
                                <div>{game.tags.join(", ")}</div>
                            </div>
                            <div style={{paddingLeft: 30, marginLeft: 30, borderLeft: "1px solid grey"}}>
                                <div>Year</div>
                                <div>{game.year}</div>
                            </div>

                        </div>
                    </Row>
                </Col>
                <Col md={3} style={{position: 'sticky'}}>
                    <Row>
                        <Image src={"http://localhost:4444/" + game.smallImg} style={{
                            width: "100%",
                            height: 200,
                            objectFit: "contain",
                            padding: 0,
                            marginBottom: 20
                        }}/>
                        <Button style={{
                            border: 0,
                            width: "auto",
                            fontSize: '0.8em',
                            paddingInline: 10,
                            paddingBlock: 3,
                            background: "#2A2A2A"
                        }}
                                disabled={true}
                        >{game.tags[0]}</Button>
                        <div style={{padding: 0, marginTop: 20, marginBottom: 10, fontSize: '1.2em'}}>
                            KZT {game.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <Button style={{
                            paddingInline: 20,
                            width: "100%",
                            paddingBlock: 10,
                            marginBottom: 10,
                            color: 'white'
                        }}
                                variant="info"
                        >
                            BUY NOW
                        </Button>
                        <Button style={{paddingInline: 20, width: "100%", paddingBlock: 10, marginBottom: 10}}
                                variant="outline-light"
                                onClick={() => addItemToBasket(game._id, "game")}
                        >
                            ADD TO CART
                        </Button>
                        <Button style={{
                            paddingInline: 20,
                            width: "100%",
                            paddingBlock: 5,
                            marginBottom: 10,
                            fontSize: '0.9em'
                        }}
                                variant="outline-light"
                        >
                            ☮ Add to wishlist
                        </Button>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            marginTop: 20,
                            paddingInline: 0,
                            fontSize: '1.1em'
                        }}>
                            <div style={{display: "flex", justifyContent: 'space-between'}}>
                                <p style={{marginRight: 10, opacity: 0.6, marginBottom: 0}}>Sus Rewards</p>
                                <p style={{marginBottom: 0, opacity: 0.95}}>Earn 5% Back <b
                                    style={{color: 'lightblue'}}>⛒</b></p>
                            </div>
                            <hr style={{marginBlock: 10}}/>
                            <div style={{display: "flex", justifyContent: 'space-between'}}>
                                <p style={{marginRight: 10, opacity: 0.6, marginBottom: 0}}>Refund Type</p>
                                <p style={{marginBottom: 0, opacity: 0.95}}>Self-Refundable ⚝</p>
                            </div>
                            <hr style={{marginBlock: 10}}/>
                            <div style={{display: "flex", justifyContent: 'space-between'}}>
                                <p style={{marginRight: 10, opacity: 0.6, marginBottom: 0}}>Developer</p>
                                <p style={{marginBottom: 0, opacity: 0.95}}>CRABGM</p>
                            </div>
                            <hr style={{marginBlock: 10}}/>
                            <div style={{display: "flex", justifyContent: 'space-between'}}>
                                <p style={{marginRight: 10, opacity: 0.6, marginBottom: 0}}>Publisher</p>
                                <p style={{marginBottom: 0, opacity: 0.95}}>CRABGM</p>
                            </div>
                            <hr style={{marginBlock: 10}}/>
                            <div style={{display: "flex", justifyContent: 'space-between'}}>
                                <p style={{marginRight: 10, opacity: 0.6, marginBottom: 0}}>Release Date</p>
                                <p style={{marginBottom: 0, opacity: 0.95}}>11/21/{game.year}</p>
                            </div>
                            <hr style={{marginBlock: 10}}/>
                            <div style={{display: "flex", justifyContent: 'space-between'}}>
                                <p style={{marginRight: 10, opacity: 0.6, marginBottom: 0}}>Platform</p>
                                <p style={{marginBottom: 0, opacity: 0.95}}>Windows</p>
                            </div>
                            <hr style={{marginBlock: 10}}/>
                        </div>
                        <div style={{
                            display: "flex",
                            paddingInline: 0,
                            justifyContent: 'space-between',
                            marginTop: 20
                        }}>
                            <Button style={{
                                paddingInline: 20,
                                width: "48%",
                                paddingBlock: 5,
                                marginBottom: 10,
                                fontSize: '0.9em'
                            }}
                                    variant="outline-light"
                            >
                                ♳ SHARE
                            </Button>
                            <Button style={{
                                paddingInline: 20,
                                width: "48%",
                                paddingBlock: 5,
                                marginBottom: 10,
                                fontSize: '0.9em'
                            }}
                                    variant="outline-light"
                            >
                                ⚐ REPORT
                            </Button>
                        </div>


                    </Row>
                </Col>
            </Row>
            <Row style={{marginTop: 100}}>
                <Col md={8} style={{padding: 0}}>
                    <div style={{fontSize: "1.5rem", color: "white", marginBottom: 20}}>{game.title} System
                        Requirements
                    </div>
                    <div style={{
                        width: "100%",
                        paddingInline: 40,
                        paddingTop: 40,
                        paddingBottom: 20,
                        background: '#202020',
                        color: "white",
                        borderRadius: 5
                    }}>
                        <a style={{}}>WINDOWS</a>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <hr style={{width: '10%', background: "white", height: 5, border: 0, opacity: 1}}/>
                            <hr style={{width: '90%'}}/>
                        </div>
                        <div style={{display: 'flex', marginTop: 30}}>
                            <div style={{width: '40%', marginRight: '10%'}}>
                                <p style={{opacity: 0.5}}>Minimum</p>
                                {chars.map(item =>
                                    <div>
                                        <p style={{opacity: 0.5, margin: 0}}>{item[0]}</p>
                                        <p style={{marginBottom: 30}}>{item[1]}</p>
                                    </div>
                                )}


                            </div>
                            <div style={{width: '40%'}}>
                                <p style={{opacity: 0.5}}>Recommended</p>
                                {chars.map(item =>
                                    <div>
                                        <p style={{opacity: 0.5, margin: 0}}>{item[0]}</p>
                                        <p style={{marginBottom: 30}}>{item[2]}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                </Col>
            </Row>
        </Container>

    );
});

export default GamePage;