import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {fetchConsoleById, fetchGameById, fetchGames, putItemToBasket} from "../http/contentAPI";
import {login} from "../http/userAPI";
import {Context} from "../index";

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
        <Container className="mt-5 mb-5 w-75" fluid>
            <Row className="d-flex justify-content-md-between">
                <Col md={6} >
                    <Image src={'http://localhost:4444/' + console.img}
                           style={{width: "100%", height: 600, objectFit: "contain", padding: 0}}/>
                </Col>
                <Col md={5}>
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
                    <div className="mb-4">
                    {console.chars.map(i =>
                        <div className="mb-1" style={{fontSize: "1em"}}><b>{i.title}:</b> {i.description}</div>
                    )}
                    </div>
                    <Button style={{paddingInline: 20, width: "100%", paddingBlock: 10}}
                            variant="outline-dark"
                            onClick={() => addItemToBasket(console._id, "console")}
                    >
                        Add to cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
});

export default ConsolePage;