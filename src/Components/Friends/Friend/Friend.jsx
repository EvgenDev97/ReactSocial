import React from "react";

const Friend = (props)=>{

    const {id, avatar,name} = props

    return <div id={id}>
        <span>{avatar}</span>
        <span>{name}</span>
    </div>
}

export  default  Friend