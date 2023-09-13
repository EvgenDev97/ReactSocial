import React from "react";
import Post from "./Post/Post";
const MyPosts = (props) =>{
    const {posts, addPost, newPostText, changeNewPostText}  = props

    return <div>
        <Post posts={posts}
              addPost={addPost}
              newPostText={newPostText}
              changeNewPostText={changeNewPostText}/>
    </div>
}

export default  MyPosts