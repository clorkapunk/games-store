import React, {useContext, useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

const LoginForm = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const click = async () => {
        try {
            let data = await login(email, password)
            user.setUser({id: data._id, email: data.email, role: data.role})
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">Authorization</h2>
            <Form className="d-flex flex-column align-items-center">
                <Form.Control
                    className="mt-3"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="on"
                />
                <Form.Control
                    type="password"
                    className="mt-2"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="on"
                />
                <div className="mt-3 d-flex justify-content-between align-items-center px-3"
                     style={{width: "100%"}}>
                    <div>
                        No account? <NavLink to={REGISTRATION_ROUTE}>Sign up now</NavLink>
                    </div>
                    <Button style={{paddingInline: 20}} variant="outline-success" onClick={click}>
                        Log in
                    </Button>
                </div>
            </Form>
        </Card>
    );
};

export default LoginForm;