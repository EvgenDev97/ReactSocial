import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) =>{
    const {friendState} = props
    return <div>
        {friendState.friends.map( f =>  <Friend key={f.id} name={f.name} avatar={f.avatar} id={f.id}/>)}
    </div>
}

export default Friends