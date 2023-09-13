import React from "react";
import s from "./Navbar.module.scss"
import {Link} from "react-router-dom";

const Navbar = () => {
    return <div className="navigation">
        <div>
            <Link to="/profile" className={s.link}>Profile</Link>
        </div>
        <div >
            <Link to="/dialogs" className={s.link}>Dialogs</Link>
        </div>
        <div>
            <Link to="/friends" className={s.link}>Friends</Link>
        </div>
        {/*<div ><Link to className={s.link}></Link></div>*/}
        {/*<div ><Link to className={s.link}></Link></div>*/}
        {/*<div ><Link to className={s.link}></Link></div>*/}
    </div>
}

export default Navbar