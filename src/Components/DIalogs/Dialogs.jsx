import React from "react";
import Dialogitem from "./Dialog/Dialogitem";
import s from "./Dialogs.module.scss"

const Dialogs = (props) => {

    const sendMsg = React.createRef()
    const send = () => {
        let text = sendMsg.current.value
        alert(text)
    }
    const {dialogsState} = props
    return <div>
        <div>
            <textarea ref={sendMsg} name="" id="" cols="20" rows="5"></textarea>
            <div>
                <button onClick={send}>
                    Send
                </button>
            </div>
        </div>
        <div className={s.dialogs}>
            <div>
                {dialogsState.dialogs.map((d) => <Dialogitem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div>
                {dialogsState.msg.map(m => <div key={m.id}>{m.msg}</div>)}
            </div>
        </div>

    </div>
}

export default Dialogs