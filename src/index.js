import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let dialogs = [
    {id:1, name:"nameOne"},
    {id:2, name:"nameTwo"},
    {id:3, name:"nameThree"}
]

let msg = [
    {id:1,msg:"Hey"},
    {id:2,msg:"How`re you"},
    {id:3, msg:"blablabla"}
]

let posts = [
    {id:1, post:"Post1"},
    {id:2, post:"Post2"}
]

root.render(

    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} msg={msg} posts={posts} />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
