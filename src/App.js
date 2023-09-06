import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/DIalogs/Dialogs";
import "normalize.css"
import "./App.scss"
import {Route,Routes} from "react-router-dom";

function App(props) {

    const {dialogs,posts,msg} = props

    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div>
                <Routes>
                    < Route path="/profile" element={<Profile posts={posts}/>} />
                    < Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} msg={msg}/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
