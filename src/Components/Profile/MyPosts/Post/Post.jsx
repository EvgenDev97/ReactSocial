import React from "react";

const Post = (props)=>{

    const {posts} = props

    return <div>
        {posts.map( p => <div key={p.id}>{p.post}</div>)}
    </div>
}

export default Post