import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter} from "react-router-dom";
// import state from "./Redux/State";
import {addPost} from "./Redux/State";
import {changeNewPostText} from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerender = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );

}