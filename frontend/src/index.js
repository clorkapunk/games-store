import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import ContentStore from "./store/ContentStore";
import image from './assets/shopping-cart.png'
import './style.css'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div id="main_cont" style={{minHeight: "100vh", background: "rgb(18, 18, 18)"}}>
    <Context.Provider value={{
        user: new UserStore(),
        content: new ContentStore()
    }}>
        <App/>
    </Context.Provider>
    </div>
);

