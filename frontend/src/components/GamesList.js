import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Carousel, Image, Row} from "react-bootstrap";
import GameItem from "./GameItem";
import {GAME_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const GamesList = observer(({addItemToBasket}) => {
    const {content} = useContext(Context)
    const navigate = useNavigate()

    return (
        <>
            <Carousel fade className="mb-5" interval={3000}>
                {content.games.map(game =>
                    <Carousel.Item key={game._id}>
                        <Image text="Third slide"
                               className='games-carousel'
                               src={"http://localhost:4444/" + game.mainImg} style={{
                            width: "100%",
                            height: "600px",
                            objectFit: "cover",
                            borderRadius: 5,
                            cursor: "pointer"
                        }}
                               onClick={() => navigate(GAME_ROUTE + "/" + game._id)}
                        />
                        <Carousel.Caption>
                            <h3 style={{
                                textShadow:
                                    "1px 1px 0 #000, -1px 1px 0 #000,-1px -1px 0 #000,1px -1px 0 #000"
                            }}>{game.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
            <h4 className='games-category-title' style={{color: "white", marginBottom: 20, textAlign: "left"}}>Best games</h4>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Row xs={1} sm={2} md={3} xl={4} xxl={5} style={{width: "100%"}}
                     className="d-flex justify-content-between">
                    {content.games.map(game =>
                        <GameItem key={game._id} game={game} onAddItemHandler={addItemToBasket}/>
                    )}
                </Row>
            </div>
        </>
    );
});

export default GamesList;