import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateGame from "../components/modals/CreateGame";
import CreateConsole from "../components/modals/CreateConsole";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGamepad, faHandLizard} from "@fortawesome/free-solid-svg-icons";


const Admin = () => {
    const [gameVisible, setGameVisible] = useState(false)
    const [consoleVisible, setConsoleVisible] = useState(false)
    return (
        <Container className="d-flex flex-column mt-3" style={{minHeight: '100vh'}}>
            <Button style={{width: 200}} className="mt-2 mx-auto" onClick={() => setGameVisible(true)}
                    variant="outline-light">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
                    <p style={{padding: 0, margin: 0}}>Add new game</p>
                    <FontAwesomeIcon style={{marginLeft: 20}} icon={faGamepad}/>
                </div>
            </Button>
            <Button style={{width: 200}} className="mt-2 mx-auto" onClick={() => setConsoleVisible(true)}
                    variant="outline-light">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
                    <p style={{padding: 0, margin: 0}}>Add new console</p>
                    <FontAwesomeIcon style={{marginLeft: 20}} icon={faHandLizard}/>
                </div>
            </Button>
            <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
            <CreateConsole show={consoleVisible} onHide={() => setConsoleVisible(false)}/>

        </Container>
    );
};

export default Admin;