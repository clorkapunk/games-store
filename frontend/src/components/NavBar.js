import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, DISTRIBUTION_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import Shop from "../pages/Shop";

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
        <>
            <Navbar collapseOnSelect style={{background: "#18181C", padding: "5px 40px"}} className="navbar-main" variant="dark" expand="xxl">
                    <Navbar.Brand style={{
                        color: "white",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        marginRight: 40,
                        cursor: "pointer"
                    }}
                                  onClick={() => navigate(SHOP_ROUTE)}
                    >
                        <img src="https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif"
                             style={{height: "3.7rem", marginRight: 20}}/>
                        <div style={{fontSize: "1.5rem", display: "flex", alignItems: "center", borderLeft: '2px solid #303034', paddingLeft: 20}}>SusStore</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto collapsed-nav-item">
                            <Nav.Link
                                active={location.pathname.substring(1).split('/')[0] === "distribution"}
                                className="navbar-item-distribution "
                                style={{
                                    color: 'white',
                                    opacity: 0.5,

                                    fontSize: "1.1em",
                                    marginBlock: 'auto'
                                }}
                                onClick={() => navigate(DISTRIBUTION_ROUTE)}
                            >
                                Distribution
                            </Nav.Link>
                        </Nav>
                        {user.isAuth ?
                            <Nav className="ml-auto" style={{color: "white"}}>
                                <NavDropdown
                                    className=" collapsed-nav-item"
                                    style={{border: "0px solid white", borderRadius: 6, marginRight: 5, paddingLeft: 15}}
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
                                        className="mx-2 collapsed-nav-item collapsed-nav-button"
                                        variant={"outline-light"}
                                        onClick={() => navigate(ADMIN_ROUTE)}
                                    >
                                        Admin panel
                                    </Button>}
                                <Button
                                    className="mx-2 collapsed-nav-item collapsed-nav-button"
                                    variant={"outline-light"}
                                    onClick={() => logOut()}
                                >
                                    Log out
                                </Button>
                            </Nav>
                            :
                            <Nav className="ml-auto collapsed-nav-item" style={{color: "white"}}>
                                <Button variant={"outline-light"}
                                        onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
                            </Nav>
                        }
                    </Navbar.Collapse>
            </Navbar>

        </>
    );
});

export default NavBar;