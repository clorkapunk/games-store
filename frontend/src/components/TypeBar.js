import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Form, InputGroup, ListGroup, Nav} from "react-bootstrap";
import '../style.css'
import {CONSOLE_ROUTE, GAME_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const TypeBar = observer(() => {
    const [input, setInput] = useState('');
    const [style, setStyle] = useState(
        {position: "absolute", width: "23%", background: '#202020', borderRadius: 5, padding: 0}
    )
    const navigate = useNavigate()
    const {content} = useContext(Context)
    useEffect(() => {
        if (content.selectedType.id === null) {
            content.setSelectedType(content.types[0])
        }
    }, [])

    function onChange(event){
        const {value} = event.target
        setInput(value)
        if(value === ""){
            setStyle(prevState => {return {...prevState, padding: 0}})
        }
        else {
            setStyle(prevState => {return {...prevState, padding: 5}})
        }
    }




    return (
        <Nav variant="pills" style={
            {
                background: "#121212",
                padding: '20px 0 20px 0',
                display: "flex",
                alignItems: 'center'
            }
        } defaultActiveKey="/home">
            <Nav.Item style={{marginRight: "10px"}}>
                <InputGroup>
                    <Form.Control
                        placeholder="Game title, console model..."
                        aria-label="Game title, console model..."
                        aria-describedby="basic-addon2"
                        value={input}
                        onChange={onChange}
                    />
                    <Button variant="outline-secondary" id="button-addon2"
                    >
                        Search
                    </Button>
                </InputGroup>
                <div style={style}>
                    {
                        content.games.filter(item => {
                            const searchString = input.toLowerCase()
                            const titleString = item.title.toLowerCase()
                            return searchString && titleString.includes(searchString)
                        }).map(item =>
                            <>
                                <div style={{paddingInline: 10, paddingBlock: 10, background: '#202020', color: 'white', cursor: 'pointer'}}
                                     onClick={() => {
                                         navigate(GAME_ROUTE + "/" + item._id)
                                     }
                                }
                                >
                                    {item.title}
                                    <hr style={{margin: 0, border: 0, background: "white", height: 1, opacity: 0.6, marginTop: 3  }}/>
                                </div>
                            </>

                        )
                    }
                    {
                        content.consoles.filter(item => {
                            const searchString = input.toLowerCase()
                            const titleString = item.title.toLowerCase()
                            return searchString && titleString.startsWith(searchString)
                        }).map(item =>
                            <>
                                <div style={{paddingInline: 10, paddingBlock: 10, background: '#202020', color: 'white', cursor: 'pointer'}}
                                     onClick={() => navigate(CONSOLE_ROUTE + "/" + item._id)}
                                >
                                    {item.title}
                                    <hr style={{margin: 0, border: 0, background: "white", height: 1, opacity: 0.6, marginTop: 3  }}/>
                                </div>
                            </>
                        )
                    }
                </div>
            </Nav.Item>
            {content.types.map(type =>
                <Nav.Item
                    style={{cursor: "pointer", borderRadius: 3, color: "white"}}
                    // active={type.id === content.selectedType.id}
                    onClick={() => {
                        content.setSelectedType(type)
                        navigate(SHOP_ROUTE)
                    }}
                    key={type.id}
                >
                    <Nav.Link
                        className="typebarItem"
                        id={(type.id === content.selectedType.id ? "activeTypeBarTab" : "")}
                        style={{color: 'white', opacity: 0.5, fontWeight: 'bolder', fontSize: "1.2em"}}
                    >
                        {type.title}
                    </Nav.Link>
                </Nav.Item>
            )}
        </Nav>
        // <ListGroup className="typebar mt-2">
        //     {content.types.map(type =>
        //         <ListGroup.Item
        //             style={{cursor: "pointer"}}
        //             active={type.id === content.selectedType.id}
        //             onClick={() => {
        //                 content.setSelectedType(type)
        //             }}
        //             key={type.id}
        //             id={(type.id === content.selectedType.id ? "activeTypeBarTab" : "")}
        //             className="d-flex justify-content-between typebarItem"
        //         >
        //             <p>{type.title}</p>
        //         </ListGroup.Item>
        //     )}
        // </ListGroup>
    );
});

export default TypeBar;