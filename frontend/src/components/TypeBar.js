import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import '../style.css'

const TypeBar = observer(() => {
    const {content} = useContext(Context)
    useEffect(() => {
        if(content.selectedType.id === null){
            content.setSelectedType(content.types[0])
        }
    }, [])


    return (
        <ListGroup className="typebar mt-2">
            {content.types.map(type =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active={type.id === content.selectedType.id}
                    onClick={() => {
                        content.setSelectedType(type)
                    }}
                    key={type.id}
                    id={(type.id === content.selectedType.id ? "activeTypeBarTab" : "")}
                    className="d-flex justify-content-between typebarItem"
                >
                    <p>{type.title}</p>
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;