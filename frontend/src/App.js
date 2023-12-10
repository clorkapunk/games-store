import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import Footer from "./components/Footer";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("token") !== null) {
            check().then(data => {
                user.setUser({id: data._id, email: data.email, role: data.role})
                user.setIsAuth(true)
            })
                .catch((e) => {console.log(e)})
                .finally(() => setLoading(false))
        }
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    )
})

export default App;
