import React, {useContext, useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {createGame} from "../../http/contentAPI";

const CreateGame = ({show, onHide}) => {
    const [data, setData] = useState({
        title: "",
        img: null,
        year: "",
        description: "",
        tags: "",
        price: ""
    })

    function onChangeHandler (event){
        const {name, value, files} = event.target
        setData(prevState => {
            return {
                ...prevState,
                [name]: name === "img" ? files[0] : value
            }
        })
    }


    function submitForm(){
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('description', data.description)
        formData.append('img', data.img)
        formData.append('tags', JSON.stringify(data.tags.split(/\s+/)))
        formData.append('year', data.year)
        createGame(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header
                closeButton
                style={{background: "black", color: "white", borderColor: "grey"}}
            >
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new game
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "black"}}>
                <Form>
                    <Form.Control
                        style={{marginBlock: 10}}
                        placeholder="Title"
                        value={data.title}
                        name="title"
                        onChange={onChangeHandler}
                    />
                    <Form.Control
                        type="file"
                        style={{marginBlock: 10}}
                        onChange={onChangeHandler}
                        name="img"
                    />
                    <Form.Control
                        style={{marginBlock: 10}}
                        placeholder="Year"
                        value={data.year}
                        name="year"
                        onChange={onChangeHandler}
                    />
                    <Form.Control
                        style={{marginBlock: 10}}
                        as="textarea"
                        placeholder="Description"
                        value={data.description}
                        name="description"
                        onChange={onChangeHandler}
                    />
                    <Form.Control
                        style={{marginBlock: 10}}
                        placeholder="Tags, example: tag1 tag2 tag3 ..."
                        value={data.tags}
                        name="tags"
                        onChange={onChangeHandler}
                    />
                    <Form.Control
                        style={{marginBlock: 10}}
                        placeholder="Price"
                        value={data.price}
                        name="price"
                        onChange={onChangeHandler}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer
                style={{background: "black", borderColor: "grey"}}
            >
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={submitForm}>Apply</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGame;