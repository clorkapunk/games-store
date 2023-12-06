import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";


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
            <div style={{height: 50, background: '#202020', display: 'flex', alignItems: 'center'}}>
                <p style={{margin: 0, marginLeft: 20, color: '#c4c4c4'}}>Shop verified by egov.kz (joke)</p>
            </div>
        </BrowserRouter>
    )
})

export default App;
