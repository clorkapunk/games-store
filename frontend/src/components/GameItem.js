import React, {useState} from 'react';
import {Card, Col, Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {GAME_ROUTE} from "../utils/consts";
import cartIcon from '../assets/shopping-cart.png'

const GameItem = ({game, onAddItemHandler}) => {
    const type = 'game'
    const [cartIconStyle, setCartIconStyle] = useState({
        position: "absolute",
        alignItems: "center",
        margin: 5,
        height: 25,
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

    const [cartTextStyle, setCartTextStyle] = useState({
        fontSize: "0.85rem",
        background: "#212529",
        color: "white",
        paddingInline: 10,
        borderRadius: 5,
        marginRight: 5,
        opacity: 0,
        display: "flex",
        transition: "opacity 0.3s"
    })

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add to cart
        </Tooltip>
    )


    const navigate = useNavigate()

    return (
        <Col md={3} className="mt-4 mb-3">
            <Card style={{width: 200, cursor: "pointer", background: "transparent", color: "white"}}>
                <div onMouseEnter={() => setCartIconStyle({...cartIconStyle, opacity: 1})}
                     onMouseLeave={() => setCartIconStyle({...cartIconStyle, opacity: 0})}
                >
                    <div style={{...cartIconStyle,}} onClick={() => {
                        onAddItemHandler(game._id, type)
                    }}>
                        <OverlayTrigger
                            placement="left"
                            delay={{show: 100, hide: 200}}
                            overlay={renderTooltip}
                        >
                            <Image style={{height: "100%", filter: "invert(100%)"}} src={cartIcon}/>
                        </OverlayTrigger>

                    </div>
                    <Card.Img variant="top" src={"http://localhost:4444/" + game.img} style={{height: 250, objectFit: "cover", borderRadius: 5}}
                              onClick={() => navigate(GAME_ROUTE + "/" + game._id)}
                    />
                    {/*<Image width={200} height={250} src={"http://localhost:4444/" + game.img} style={{objectFit: "cover"}}*/}
                    {/*       onClick={() => navigate(GAME_ROUTE + "/" + game._id)}*/}
                    {/*/>*/}
                </div>
                <div onClick={() => navigate(GAME_ROUTE + "/" + game._id)}>
                    <div style={{marginTop: 15}}>{game.title}</div>
                    <div style={{marginTop: 5}}>{game.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{game.price !== "Free" && " KZT"}</div>
                </div>
            </Card>
        </Col>
    );
};

export default GameItem;



// <div onMouseEnter={() => setCartIconStyle({...cartIconStyle, opacity: 1})}
//      onMouseLeave={() => setCartIconStyle({...cartIconStyle, opacity: 0})}
// >
//     <div style={cartIconStyle} onClick={() => {
//         onAddItemHandler(game._id, type)
//     }}>
//         <div style={cartTextStyle}>Add to cart</div>
//         <Image style={{height: "100%"}} src={cartIcon}
//                onMouseEnter={() => setCartTextStyle({...cartTextStyle, opacity: 1})}
//                onMouseLeave={() => setCartTextStyle({...cartTextStyle, opacity: 0})}
//         />
//     </div>
//     <Image width={200} height={250} src={"http://localhost:4444/" + game.img} style={{objectFit: "cover"}}
//            onClick={() => navigate(GAME_ROUTE + "/" + game._id)}
//     />
// </div>