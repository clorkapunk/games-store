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
        <Row className="d-flex justify-content-between">
            <Carousel fade className="mb-5" interval={3000}>
                {content.games.map(game =>
                    <Carousel.Item key={game._id}>
                        <Image text="Third slide"
                               src={"http://localhost:4444/" + game.mainImg} style={{width: "100%", height: "600px", objectFit: "cover", borderRadius: 5, cursor: "pointer"}}
                               onClick={() => navigate(GAME_ROUTE + "/" + game._id)}
                        />
                        <Carousel.Caption>
                            <h3 style={{textShadow:
                                "1px 1px 0 #000, -1px 1px 0 #000,-1px -1px 0 #000,1px -1px 0 #000"}}>{game.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
            <h4 style={{color: "white", marginBottom: 20}}>Best games</h4>
            {content.games.map(game =>
                <GameItem key={game._id} game={game} onAddItemHandler={addItemToBasket}/>
            )}
        </Row>
    );
});

export default GamesList;