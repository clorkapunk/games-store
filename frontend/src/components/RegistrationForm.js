import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {Button, Card, Form} from "react-bootstrap";

const RegistrationForm = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [nickname, setNickname] = useState("")

    const click = async () => {
        try {
            let data = await registration(email, password, nickname, firstname, lastname)
            user.setUser({id: data._id, email: data.email, role: data.role})
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">Registration</h2>
            <Form className="d-flex flex-column align-items-center">
                <Form.Control
                    className="mt-3"
                    placeholder="Firstname"
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Surname"
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Nickname"
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    type="password"
                    className="mt-2"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className="mt-3 d-flex justify-content-between align-items-center px-3"
                     style={{width: "100%"}}>

                    <div>
                        Already have an account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                    </div>

                    <Button style={{paddingInline: 20}} variant="outline-success" onClick={click}>
                        Sign up
                    </Button>
                </div>
            </Form>
        </Card>
    );
};

export default RegistrationForm;