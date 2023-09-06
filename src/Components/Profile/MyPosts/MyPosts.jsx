import React from "react";
import Post from "./Post/Post";
const MyPosts = (props) =>{
    const {posts}  = props

    return <div>
        <Post posts={posts} />
    </div>
}

export default  MyPosts