import React, {useEffect, useRef, useState} from 'react';
import {Button, Card, Col, Image, ListGroup, Row, Stack, Table} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {GAME_ROUTE} from "../utils/consts";
import deleteIcon from '../assets/delete-icon.png'
import {fetchConsoleById, fetchGameById} from "../http/contentAPI";

const BasketItem = ({itemId, type, onCostChange, onDeleteHandler}) => {
    const [amount, setAmount] = useState(1)
    const [item, setItem] = useState({
        _id: null,
        title: "",
        year: "",
        description: "",
        smallImg: "",
        img: "",
        tags: [],
        price: ""
    })

    const [halfstyle, setHalfstyle] = useState({width: '50%', borderColor: "black", padding: 3, justifyContent: 'space-between'})


    useEffect(() => {
        if (type === "game") fetchGameById(itemId).then(data => setItem(data))
        else if (type === "console") fetchConsoleById(itemId).then(data => setItem(data))
        if(type==='game') setHalfstyle(prevState => {return {...prevState, justifyContent: 'end'}})
    }, []);

    useEffect(() => {
        onCostChange(item._id, item.price, amount)
    }, [amount])


    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem("basket")).find(i => i.id === item._id)) {
            const itemsTemp = JSON.parse(sessionStorage.getItem("basket"))
            let sessionAmount = itemsTemp.find(i => i.id === item._id).amount
            setAmount(sessionAmount)
        }
        if (item._id !== null) {
            onCostChange(item._id, item.price, amount)
        }
    }, [item])


    const changeAmount = (e) => {
        const {name} = e.target
        setAmount(prevState => name === "decrement" ?
            (prevState >= 2 ? prevState - 1 : prevState)
            :
            (prevState >= 1 ? prevState + 1 : prevState)
        )
    }

    const deleteItem = () => {
        onDeleteHandler(item._id)
    }


    return (
        <ListGroup horizontal style={{width: "100%", justifyContent: 'space-between', background: "#202020"}}
                   className="mt-2 basket-item-main">
            <div className="basketItem basket-item-upper" style={{width: "50%", borderColor: "black"}}>
                <ListGroup.Item style={{width: "30%", color: 'white'}}
                                variant="light">
                    <Image className="basket-item-img" src={'http://localhost:4444/' + (type === 'game' ? item.mainImg : item.img)}
                           style={{width: "100%", height: 100, objectFit: "cover", padding: 5}}/>
                </ListGroup.Item>
                <ListGroup.Item className="basketItem" style={{width: "70%", color: 'white'}} variant="light">
                    {item.title}
                </ListGroup.Item>
            </div>
            <div className="basketItem basket-item-bottom"  style={halfstyle}>
                {type === 'console' &&
                    <div className='basket-item-bottom-left' style={{display: "flex", width: '50%'}}>
                        <ListGroup.Item className="basketItem"
                                        style={{
                                            width: "60%",
                                            borderColor: "black",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                        variant="light">
                            {item.price}
                        </ListGroup.Item>
                        <ListGroup.Item className="basketItem" style={{
                            width: "40%",
                            borderColor: "black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexShrink: 0
                        }} variant="light">
                            <Button onClick={changeAmount} name="decrement" variant="outline-light" style={{
                                height: 20,
                                width: 20,
                                padding: '5px 5px',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>-</Button>
                            <div className="d-flex justify-content-center align-items-center mx-2">{amount}</div>
                            <Button onClick={changeAmount} name="increment" variant="outline-light" style={{
                                height: 20,
                                width: 20,
                                padding: '5px 5px',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>+</Button>
                        </ListGroup.Item>
                    </div>}
                <div className="basket-item-bottom-right" style={{width: "50%", display: 'flex'}}>
                    <ListGroup.Item className="basketItem" style={{width: "60%", borderColor: "black", color: 'white'}} variant="light">
                        {item.price === "Free" ? "0" : (Number.parseFloat(item.price) * amount)} KZT
                    </ListGroup.Item>
                    <ListGroup.Item className="basketItem basket-item-delete-button-div" style={{width: "40%", borderColor: "black"}} variant="light">
                        <Button onClick={deleteItem} className="basket-item-delete-button" variant="danger">
                            DELETE
                        </Button>
                    </ListGroup.Item>
                </div>
            </div>
        </ListGroup>

    );
};

export default BasketItem;