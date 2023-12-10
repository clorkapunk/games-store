import React, {useState} from 'react';
import {Card, Col, Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {CONSOLE_ROUTE} from "../utils/consts";
import cartIcon from '../assets/shopping-cart.png'

const ConsoleItem = ({console, onAddItemHandler}) => {
    const type = 'console'
    const [cartIconStyle, setCartIconStyle] = useState({
        position: "absolute",
        alignItems: "center",
        height: 30,
        right: "0%",
        top: "0%",
        background: "black",
        display: "flex",
        padding: 5,
        opacity: 0,
        transition: "opacity 0.3s",
        border: "1px solid white",
        borderRadius: 10
    })


    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add to cart
        </Tooltip>
    )


    const navigate = useNavigate()

    return (
        <Col md={"auto"} className="mb-5">
            <Card className="consoleItem" style={{width: 400, cursor: "pointer", background: "transparent", color: "white", border: 0}}>
                <div onMouseEnter={() => setCartIconStyle({...cartIconStyle, opacity: 1})}
                     onMouseLeave={() => setCartIconStyle({...cartIconStyle, opacity: 0})}
                >
                    <div style={{...cartIconStyle,}}
                         onClick={() => {
                        onAddItemHandler(console._id, type)
                    }}>
                        <OverlayTrigger
                            placement="left"
                            delay={{show: 100, hide: 200}}
                            overlay={renderTooltip}
                        >
                            <Image style={{height: "100%", filter: "invert(100%)"}}  src={cartIcon}/>
                        </OverlayTrigger>

                    </div>
                    <Card.Img variant="top" src={"http://localhost:4444/" + console.img} style={{height: 250, objectFit: "cover", borderRadius: 5}}
                              onClick={() => navigate(CONSOLE_ROUTE + "/" + console._id)}
                    />
                </div>
                <div onClick={() => navigate(CONSOLE_ROUTE + "/" + console._id)} style={{paddingInline: 10}}>
                    <div style={{marginTop: 10, fontSize: '1.3em'}}>{console.title}</div>
                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'right', fontSize: '1.1em'}}>{console.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{console.price !== "Free" && " KZT"}</div>
                </div>
            </Card>
        </Col>
    );
};

export default ConsoleItem;