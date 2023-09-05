import React from "react";
import {Link} from "react-router-dom";
import Dialogitem from "./Dialog/Dialogitem";
const Dialogs = () => {

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


    return <div>
        <div className="dialogs">
            {dialogs.map((d)=> <Dialogitem name={d.name} id={d.id} />)}
        </div>
        <div></div>
    </div>
}

export default Dialogs