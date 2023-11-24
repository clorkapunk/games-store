import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import BasketItem from "./BasketItem";

const BasketList = observer(({onDelete}) => {
    const {content} = useContext(Context)
    const [cost, setCost] = useState(0)

    let itemsTemp = []
    const items = JSON.parse(sessionStorage.getItem("basket"))
    content.basket.forEach(item => {
        if(items.find(i => i.id === item.itemId)) return
        itemsTemp.push({id: item.itemId, price: 0, amount: 1})
    })
    sessionStorage.setItem("basket", JSON.stringify(items.concat(itemsTemp)))


    const costHandle = (id, price, amount) => {
        if(id === null) return
        if(price === "Free") price = 0
        let items = JSON.parse(sessionStorage.getItem("basket"))
        if(items.find(i => i.id === id) === undefined) {
            sessionStorage.setItem("basket", JSON.stringify([...items, {id: id, price: price, amount: amount}]))
        }
        else{
            items = items.filter(i => i.id !== id)
            sessionStorage.setItem("basket", JSON.stringify([...items, {id: id, price: price, amount: amount}]))
        }

        let session = JSON.parse(sessionStorage.getItem("basket"))
        if(session.length){
            let costTemp = 0
            session.forEach(item => {
                costTemp += Number.parseInt(item.price) * Number.parseInt(item.amount)
            })
            setCost(costTemp)
        }
    }

    useEffect(() => {
        let session = JSON.parse(sessionStorage.getItem("basket"))
        if(session.length){
            let costTemp = 0
            session.forEach(item => {
                costTemp += Number.parseInt(item.price) * Number.parseInt(item.amount)
            })
            setCost(costTemp)
        }
    }, [content.basket])





    return (
        <Row className="d-flex p-0 m-0" style={{width: "100%"}}>
            {content.basket &&
                <div className="mb-4 mt-2 d-flex flex-column align-items-center">
                    {content.basket.map(item =>
                        <BasketItem key={item.itemId} itemId={item.itemId} type={item.type} onCostChange={costHandle} onDeleteHandler={onDelete}/>
                    )}
                </div>}
            {content.basket.length === 0 && <div>No items</div>}
            {content.basket.length > 0 && <div style={{ textAlign: "right"}}>Cost: {cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} KZT</div>}
        </Row>
    );
});

export default BasketList;