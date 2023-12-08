import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user, content} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation();
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        sessionStorage.removeItem("basket")
        localStorage.removeItem("token")
        let currectRoute = location.pathname.substring(1).split('/')
        if (currectRoute[0] === "admin" || currectRoute[0] === "basket") {
            navigate(SHOP_ROUTE)
        }
        content.setBasket([])
    }

    return (
        <Navbar style={{background: "#18181C"}} variant="dark">
            <Container>
                <NavLink style={{color: "white", textDecoration: "none", display: "flex", alignItems: "center"}}
                         to={SHOP_ROUTE}>
                    <img src="https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif"
                         style={{height: "4rem", marginRight: 20}}/>
                    <div style={{fontSize: "2rem"}}>SusStore</div>
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <NavDropdown
                            style={{border: "0px solid white", borderRadius: 6, marginRight: 5}}
                            title={user.user.email}
                            id="navbarScrollingDropdown">
                            <NavDropdown.Item style={{background: '#0e0e11', color: "white", opacity: 0.5}}
                                              onClick={() => navigate(PROFILE_ROUTE + "/" + user.user.id)}
                            >
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{background: '#0e0e11', color: "white", opacity: 0.5}}
                                              onClick={() => navigate(BASKET_ROUTE + "/" + user.user.id)}
                            >
                                Basket
                            </NavDropdown.Item>
                            {/*<NavDropdown.Divider />*/}
                            {/*<NavDropdown.Item href="#action5">*/}
                            {/*    Something else here*/}
                            {/*</NavDropdown.Item>*/}
                        </NavDropdown>
                        {/*<Button*/}
                        {/*    onClick={() => navigate(BASKET_ROUTE + "/" + user.user.id)}*/}
                        {/*    className="mx-1"*/}
                        {/*        variant="outline-info"*/}
                        {/*>*/}
                        {/*    {user.user.email}*/}
                        {/*</Button>*/}
                        {user.user.role === "ADMIN" &&
                            <Button
                                className="mx-1"
                                variant={"outline-light"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Admin panel
                            </Button>}
                        <Button
                            className="mx-1"
                            variant={"outline-light"}
                            onClick={() => logOut()}
                        >
                            Log out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }
            </Container>

        </Navbar>
    );
});

export default NavBar;