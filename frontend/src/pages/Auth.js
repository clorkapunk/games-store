import React, {useContext, useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {check, login, registration} from "../http/userAPI";
import axios from "axios";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBasket} from "../http/contentAPI";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            {
                isLogin ?
                    <LoginForm/>
                    :
                    <RegistrationForm/>
            }


        </Container>
    );
});

export default Auth;