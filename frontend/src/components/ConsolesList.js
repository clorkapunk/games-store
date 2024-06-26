import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import GameItem from "./GameItem";
import ConsoleItem from "./ConsoleItem";

const ConsolesList = observer(({addItemToBasket}) => {
    const {content} = useContext(Context)

    return (
        <Row className="d-flex justify-content-between console-list-row" sm={1} md={2} lg={2} xl={3} xxl={3} >
            {content.consoles.map(console =>
                <ConsoleItem key={console._id} console={console} onAddItemHandler={addItemToBasket}/>
            )}
        </Row>
    );
});

export default ConsolesList;