import React from "react";
import Dialogitem from "./Dialog/Dialogitem";
import s from "./Dialogs.module.scss"
const Dialogs = (props) => {

    const {dialogs,msg} = props




    return <div className={s.dialogs}>
        <div >
            {dialogs.map((d)=> <Dialogitem name={d.name} id={d.id} />)}
        </div>
        <div>
            {msg.map( m => <div key={m.id}>{m.msg}</div>)}
        </div>
    </div>
}

export default Dialogs