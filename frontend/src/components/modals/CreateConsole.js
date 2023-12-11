import React, {useContext, useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {set} from "mobx";
import {createConsole, createGame} from "../../http/contentAPI";

const CreateConsole = ({show, onHide}) => {
    const [data, setData] = useState({
        title: "",
        img: null,
        date: "",
        description: "",
        price: ""
    })

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', id: Date.now()}])
    }
    const removeInfo = (id) => {
        setInfo(info.filter(i => i.id !== id))
    }

    const changeInfo = (key, value, id) => {
        setInfo(info.map(i => i.id === id ? {...i, [key]: value} : i))
    }

    function onChangeHandler(event) {
        const {name, value, files} = event.target
        setData(prevState => {
            return {
                ...prevState,
                [name]: name === "img" ? files[0] : value
            }
        })
    }


    function submitForm() {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('description', data.description)
        formData.append('img', data.img)
        formData.append('chars', JSON.stringify(info))
        formData.append('date', data.date)
        createConsole(formData).then(data => onHide())
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
                style={{background: "#121212", color: "white", borderColor: "grey"}}
            >
                <Modal.Title id="contained-modal-title-vcenter">
                    Console info
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#121212"}}>
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
                        type="date"
                        style={{marginBlock: 10}}
                        value={data.date}
                        name="date"
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
                        placeholder="Price"
                        value={data.price}
                        name="price"
                        onChange={onChangeHandler}
                    />
                    <hr style={{color: "white"}}/>
                    <div style={{fontSize: "1.5em", color: "white", marginBottom: 20}}>Characteristics</div>
                    <Button
                        variant="outline-light"
                        onClick={addInfo}
                    >
                        Add
                    </Button>
                    {info.map(i =>
                        <Row className="mt-2" key={i.id}>
                            <Col md={4}>
                                <Form.Control
                                    onChange={(e) => changeInfo('title', e.target.value, i.id)}
                                    value={i.title}
                                    placeholder="Name"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    onChange={(e) => changeInfo('description', e.target.value, i.id)}
                                    value={i.description}
                                    placeholder="Value"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.id)}
                                    variant="outline-light"
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}


                </Form>
            </Modal.Body>
            <Modal.Footer
                style={{background: "#121212", borderColor: "grey"}}
            >
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={submitForm}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateConsole;