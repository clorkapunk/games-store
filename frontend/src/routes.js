import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    CONSOLE_ROUTE,
    GAME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import GamePage from "./pages/GamePage";
import ConsolePage from "./pages/ConsolePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: BASKET_ROUTE + '/:id',
        Component: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: GAME_ROUTE + '/:id',
        Component: <GamePage/>
    },
    {
        path: CONSOLE_ROUTE + '/:id',
        Component: <ConsolePage/>
    }
]