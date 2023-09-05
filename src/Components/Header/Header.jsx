import React from "react";
import s from "./Header.module.scss"

const Header = () => {
    return <header className="header">
        <div className={s.flex}>
            <div>
                <img className={s.logoimg} src={require("../img/logo.jpg")} alt="img"/>
            </div>
            <div>
                <span>AnimeSocial</span>
            </div>
        </div>


    </header>
}

export default Header