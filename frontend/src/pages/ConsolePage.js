import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row, Table} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {fetchConsoleById, fetchGameById, fetchGames, putItemToBasket} from "../http/contentAPI";
import {login} from "../http/userAPI";
import {Context} from "../index";
import TypeBar from "../components/TypeBar";

const ConsolePage = observer(() => {
    const {user, content} = useContext(Context)
    const {id} = useParams()
    const [descriptionStyle, setDescriptionStyle] = useState({
        fontSize: "1em",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden"
    })
    const expandCollapseDescription = () => {
        setDescriptionStyle(prevState => prevState.whiteSpace === "nowrap" ?
            {...prevState, whiteSpace: "", textOverflow: "", overflow: ""}
            :
            {...prevState, whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}
        )
    }

    const [console, setConsole] = useState({
        id: "",
        title: "",
        date: "",
        img: "",
        chars: [],
        description: "",
        price: ""
    })

    useEffect(() => {
        fetchConsoleById(id).then(data => setConsole(data))
    }, []);

    const addItemToBasket = (id, type) => {
        putItemToBasket(user.user.id, id, type).then(data => {
            content.setBasket(data.basketItems)
        })
    }


    return (
        <Container className="mb-5 w-75" fluid>
            <Row className="d-flex mb-3 justify-content-between" style={{position: 'sticky', top: 0, zIndex: 999}}>
                <Col md={12} style={{padding: 0}}>
                    <TypeBar/>
                </Col>
            </Row>
            <Row className="d-flex justify-content-md-between game-page-row" lg={1} xl={2} style={{color: 'white'}}>
                <Col className="game-page-col game-page-main-col" style={{padding: 0, width: '60%'}}>
                    <Image className="console-page-img" src={'http://localhost:4444/' + console.img}
                           style={{
                               width: "100%",
                               height: 800,
                               objectFit: "cover",
                               padding: 0,
                               borderRadius: 5,
                               marginBottom: 30
                           }}/>
                    <div className="mb-3">
                        <div style={descriptionStyle}>{console.description}</div>
                        <button onClick={expandCollapseDescription}
                                style={{
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    color: "#069",
                                    textDecoration: "underline",
                                    cursor: "pointer"
                                }}
                        >
                            {descriptionStyle.whiteSpace === "nowrap" ? "+ more" : "- less"}
                        </button>
                    </div>

                </Col>
                <Col className="game-page-col" style={{padding: 0, width: '35%'}}>
                    <div className="mb-4" style={{fontSize: "2em"}}>{console.title}</div>
                    <div className="mb-5" style={{fontSize: "2em"}}>
                        {console.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} KZT
                    </div>
                    <div className="mb-3" style={{fontSize: "1em"}}><b>Release
                        date:</b> {new Date(console.date).toLocaleString('en-us', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}</div>

                    <div className="mb-4">
                        {console.chars.map(i =>
                            <div className="mb-1" style={{fontSize: "1em"}}><b>{i.title}:</b> {i.description}</div>
                        )}
                    </div>

                    <Button
                        style={{paddingInline: 20, width: "100%", paddingBlock: 10, marginBottom: 10, color: 'white'}}
                        variant="info"
                    >
                        BUY NOW
                    </Button>
                    <Button style={{paddingInline: 20, width: "100%", paddingBlock: 10, marginBottom: 10}}
                            variant="outline-light"
                            onClick={() => addItemToBasket(console._id, "console")}
                    >
                        ADD TO CART
                    </Button>
                    <Button
                        style={{paddingInline: 20, width: "100%", paddingBlock: 5, marginBottom: 10, fontSize: '0.9em'}}
                        variant="outline-light"
                    >
                        ☮ Add to wishlist
                    </Button>

                </Col>
            </Row>
            <Row xs={1}>
                <Col className="game-page-col" style={{padding: 0, width: '60%'}}>
                    <p style={{color: "white", fontSize: '1.2em', marginTop: 20, marginBottom: 10}}>{console.title} Game
                        Tests</p>
                    <div style={{overflowX: "auto"}}>


                        <Table striped bordered hover variant="dark">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Game</th>
                                <th>Average FPS</th>
                                <th>Max FPS</th>
                                <th colSpan={2}>Memory usage</th>
                                <th>Total score</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>GTA V</td>
                                <td>120</td>
                                <td>200</td>
                                <td>6GB</td>
                                <td rowSpan={6}>12GB</td>
                                <td>80/100</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CS:GO</td>
                                <td>144</td>
                                <td>345</td>
                                <td>2GB</td>
                                <td>90/100</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>APEX LEGENDS</td>
                                <td>144</td>
                                <td>220</td>
                                <td>3GB</td>
                                <td>70/100</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>GTA V</td>
                                <td>120</td>
                                <td>200</td>
                                <td>6GB</td>
                                <td>80/100</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CS:GO</td>
                                <td>144</td>
                                <td>345</td>
                                <td>2GB</td>
                                <td>90/100</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>APEX LEGENDS</td>
                                <td>144</td>
                                <td>220</td>
                                <td>3GB</td>
                                <td>70/100</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
});

export default ConsolePage;