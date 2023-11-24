import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateGame from "../components/modals/CreateGame";
import CreateConsole from "../components/modals/CreateConsole";

const Admin = () => {
    const [gameVisible, setGameVisible] = useState(false)
    const [consoleVisible, setConsoleVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button className="mt-2 w-25 mx-auto" onClick={() => setGameVisible(true)} variant="outline-dark">Add new game</Button>
            <Button className="mt-2 w-25 mx-auto" onClick={() => setConsoleVisible(true)} variant="outline-dark" >Add new console</Button>
            <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
            <CreateConsole show={consoleVisible} onHide={() => setConsoleVisible(false)}/>
        </Container>
    );
};

export default Admin;