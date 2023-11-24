import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {fetchGameById, fetchGames, putItemToBasket} from "../http/contentAPI";
import {Context} from "../index";

const GamePage =  observer(() => {
    const {user, content} = useContext(Context)
    const {id} = useParams()
    const [game, setGame] = useState({
        id: null,
        title: "",
        year: "",
        description: "",
        img: "",
        tags: [],
        price: ""
    })

    useEffect(() => {
        fetchGameById(id).then(data => setGame(data))
    }, []);


    const addItemToBasket = (id, type) => {
        putItemToBasket(user.user.id, id, type).then(data => {
            content.setBasket(data.basketItems)
        })
    }


    return (
        <Container className="mt-5 pb-5 w-75 text-white" fluid>
            <div style={{fontSize: "3rem", fontWeight: "bold", color: "grey"}}>{game.title}</div>
            <Row className="d-flex mt-4 justify-content-between" >
                <Col md={7} style={{}}>
                    <Row>
                        <Image src={"http://localhost:4444/" + game.img} style={{width: "100%", height: 400, objectFit: "cover", padding: 0}}/>
                        <div style={{marginTop: 30, padding: 0}}>
                            {game.description}
                        </div>
                        <div style={{display: "flex"}}>
                            <div style={{paddingLeft: 30, marginTop: 30, borderLeft: "1px solid grey", width: "50%"}}>
                                <div>Genres</div>
                                <div>{game.tags.join(", ")}</div>
                            </div>
                            <div style={{paddingLeft: 30, marginLeft: 30, marginTop: 30, borderLeft: "1px solid grey"}}>
                                <div>Year</div>
                                <div>{game.year}</div>
                            </div>

                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Image src={"http://localhost:4444/" + game.img} style={{width: "100%", height: 200, objectFit: "contain", padding: 0}}/>
                        <div style={{padding: 0, marginBlock: 10}}>
                            KZT {game.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <Button style={{paddingInline: 20, width: "100%", paddingBlock: 10}}
                                variant="outline-light"
                                onClick={() => addItemToBasket(game._id, "game")}
                        >
                            Add to cart
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
});

export default GamePage;