import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import GamesList from "../components/GamesList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchConsoles, fetchGames, putItemToBasket} from "../http/contentAPI";
import ConsoleItem from "../components/ConsoleItem";
import ConsolesList from "../components/ConsolesList";
import '../style.css'
import {login} from "../http/userAPI";

const Shop = observer(() => {
    const {content, user} = useContext(Context)
    sessionStorage.setItem("basket", JSON.stringify([]))
    useEffect(() => {
        fetchGames().then(data => content.setGames(data))
        fetchConsoles().then(data => content.setConsoles(data))
    }, [])

    const addItemToBasket = (id, type) => {
        putItemToBasket(user.user.id, id, type).then(data => {
            content.setBasket(data.basketItems)
        })
    }


    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    {content.selectedType.title === "Games" && <GamesList addItemToBasket={addItemToBasket}/>}
                    {content.selectedType.title === "Consoles" && <ConsolesList addItemToBasket={addItemToBasket}/>}
                </Col>
            </Row>

        </Container>
    );
});

export default Shop;