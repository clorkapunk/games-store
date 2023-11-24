import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route exact path={path} key={path} element={Component}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                    <Route exact path={path} key={path} element={Component}/>
            )}
            <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;