import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/DIalogs/Dialogs";
import "normalize.css"
import "./App.scss"
import {Route, Routes} from "react-router-dom";
import Friends from "./Components/Friends/Friends";

function App(props) {

    const {state, addPost, changeNewPostText} = props

    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div>
                <Routes>
                    < Route path="/profile"
                            element={<Profile
                                profileState={state.profilePage}
                                addPost={addPost}
                                changeNewPostText={changeNewPostText}
                            />}
                    />
                    < Route path="/dialogs/*"
                            element={
                                <Dialogs dialogsState={state.messagesPage}/>}/>

                    <Route path="/friends/*" element={<Friends friendState={state.friendPage}/>}></Route>
                </Routes>
            </div>

        </div>
    );
}

export default App;
