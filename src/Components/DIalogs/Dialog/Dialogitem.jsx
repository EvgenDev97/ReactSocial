import React from "react";
import {Link} from "react-router-dom";

const Dialogitem = (props) =>{

    const {name,id} = props
    const path = "/dialogs/" + id
    return <div>
        <Link to={path}>{name}</Link>
    </div>
}

export default Dialogitem