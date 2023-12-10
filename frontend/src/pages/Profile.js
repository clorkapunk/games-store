import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, FloatingLabel, ListGroup, Nav, Row, Tab, Form, Button, Navbar} from "react-bootstrap";
import {autorun} from "mobx";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getUserDetails, updateUserDetails} from "../http/userAPI";
import {fetchGameById} from "../http/contentAPI";

const Profile = observer(() => {
    const {user} = useContext(Context);
    const [username, setUsername] = useState({
        value: '',
        disabled: true
    })
    const [email, setEmail] = useState(
        {
            value: user.user.email,
            disabled: true
        }
    )
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')

    useEffect(() => {
        getUserDetails(user.user.id).then(data => {
            setUsername(prevState => {
                return {...prevState, value: data.nickname}
            })
            setFirstname(data.firstname)
            setLastname(data.lastname)
        })
    }, []);

    function saveChangesButtonHandler() {
        updateUserDetails(user.user.id, email.value, username.value, lastname, firstname).then(data => {
                setUsername(prevState => {
                    return {...prevState, value: data.nickname}
                })
                setFirstname(data.firstname)
                setLastname(data.lastname)
            })
    }


    function onChangeHandler(event) {
        const {name, value} = event.target
        if (name === 'username') {
            setUsername(prevState => {
                return {...prevState, value: value}
            })
        } else if (name === 'email') {
            setEmail(prevState => {
                return {...prevState, value: value}
            })
        } else if (name === 'firstname') {
            setFirstname(value)
        } else if (name === 'lastname') {
            setLastname(value)
        }
    }

    function onButtonChangeHandler(event) {
        const {name} = event.target
        if (name === 'username') {
            setUsername(prevState => {
                return {...prevState, disabled: !prevState.disabled}
            })
        }
        if (name === 'email') {
            setEmail(prevState => {
                return {...prevState, disabled: !prevState.disabled}
            })
        }
    }

    return (
        <Container className="mt-5" style={{minHeight: "100vh"}}>
            <Row className="d-flex justify-content-center">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row style={{paddingBottom: 20}}>
                        <Col md={3} xs={12} style={{padding: 0}}>
                            <Nav variant="pills" className="flex-column" style={{background: "white", borderRadius: 5}}>
                                <Nav.Item className="profile-settings-item" style={{background: 'white'}}>
                                    <Nav.Link className="profile-settings-item-link" eventKey="first">Account
                                        settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="profile-settings-item" style={{background: 'white'}}>
                                    <Nav.Link className="profile-settings-item-link" eventKey="second">Sus
                                        Rewards</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9} xs={12} style={{padding: 0}} className="settings-tabs-col">
                            <Tab.Content style={{background: "white", borderRadius: 5}}>
                                <Tab.Pane eventKey="first" className="profile-settings-tab">
                                    <h2>Account Settings</h2>
                                    <p style={{opacity: 0.7}}>Manage your account’s details.</p>
                                    <h5 style={{fontWeight: "bold"}}>Account Information</h5>
                                    <p style={{opacity: 0.7}}>ID: {user.user.id}</p>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Display name"
                                        className="mb-3"
                                        style={{display: 'flex'}}
                                    >
                                        <Form.Control
                                            placeholder="Display name"
                                            className="account-settings-input"
                                            disabled={username.disabled}
                                            name="username"
                                            value={username.value}
                                            onChange={onChangeHandler}
                                            style={{width: "60%", marginRight: 20}}/>
                                        <Button name="username" onClick={onButtonChangeHandler}>EDIT</Button>
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingPassword"
                                        label="Email Address"

                                        style={{display: 'flex'}}
                                    >

                                        <Form.Control
                                            className="account-settings-input"
                                            disabled={email.disabled}
                                            placeholder="Email Address"
                                            name="email"
                                            value={email.value}
                                            onChange={onChangeHandler}
                                            style={{width: "60%", marginRight: 20}}
                                        />
                                        <Button name="email" onClick={onButtonChangeHandler}>EDIT</Button>
                                    </FloatingLabel>

                                    <h5 style={{fontWeight: "bold", marginTop: 60}}>Personal Details</h5>
                                    <p style={{opacity: 0.7}}>Manage your name and contact info. These personal details
                                        are private and will
                                        not be displayed to other users.</p>
                                    <FloatingLabel
                                        controlId="floatingPassword"
                                        label="First Name"
                                        className="mb-3"
                                    >

                                        <Form.Control
                                            className="account-settings-input"
                                            name="firstname"
                                            value={firstname}
                                            onChange={onChangeHandler}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingPassword"
                                        label="Second Name"
                                        className="mb-3"
                                    >

                                        <Form.Control
                                            className="account-settings-input"
                                            name="lastname"
                                            value={lastname}
                                            onChange={onChangeHandler}
                                        />
                                    </FloatingLabel>
                                    <Button style={{width: '100%', height: 50}}
                                        onClick={saveChangesButtonHandler}
                                    >
                                        Save changes
                                    </Button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className="profile-settings-tab">
                                    <h2>Sus Rewards</h2>
                                    <p style={{opacity: 0.7}}>Earn up to 5% back, or more during promotional events, on
                                        all your eligible purchases.</p>
                                    <div style={{
                                        marginBottom: 20,
                                        width: 300,
                                        background: '#F2F2F2',
                                        padding: 30,
                                        borderRadius: 3,
                                        border: '1px solid #E1E1E1'
                                    }}>
                                        <p style={{fontSize: '0.6em', color: "black", fontWeight: 'bold'}}>SUS REWARDS
                                            BALANCE</p>
                                        <p style={{fontSize: '2em', fontWeight: 'bold'}}>KTZ 0.00</p>
                                    </div>
                                    <div style={{
                                        fontSize: '0.9em',
                                        textAlign: 'center',
                                        background: '#F2F2F2',
                                        padding: 30,
                                        borderRadius: 3
                                    }}>
                                        No transactions have been completed that are eligible for Sus Rewards
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Row>

        </Container>
    );
});

export default Profile;