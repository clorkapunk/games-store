import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {createConsole, deleteItemFromBasket, fetchBasket} from "../http/contentAPI";
import BasketList from "../components/BasketList";
import {login} from "../http/userAPI";


const Basket = observer(() => {
    const {content, user} = useContext(Context)
    const [reload, setReload] = useState(0)

    useEffect(() => {
        fetchBasket(user.user.id).then(data => {
            content.setBasket(data.basketItems)
        })
    }, [reload]);

    const deleteHandle = (id) => {
        deleteItemFromBasket(user.user.id, id).then(data => content.setBasket(data.basketItems))
        let items = JSON.parse(sessionStorage.getItem("basket"))
        items = items.filter(i => i.id !== id)
        sessionStorage.setItem("basket", JSON.stringify(items))
        return true
    }

    return (
        <Container className="w-75 p-0" style={{minHeight: '100vh'}}>
            <Row className="d-flex">
                <BasketList onDelete={deleteHandle}/>
            </Row>
        </Container>
    );
});

export default Basket;