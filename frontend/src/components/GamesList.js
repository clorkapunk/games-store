import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import GameItem from "./GameItem";

const GamesList = observer(({addItemToBasket}) => {
    const {content} = useContext(Context)

    return (
        <Row className="d-flex">
            {content.games.map(game =>
                <GameItem key={game._id} game={game} onAddItemHandler={addItemToBasket}/>
            )}
        </Row>
    );
});

export default GamesList;