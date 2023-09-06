import React from "react";
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props) => {

    const {posts} = props

    return <div className="content">
        <div>
            ava + desk
        </div>
        <div>
            <MyPosts posts={posts} />
        </div>
    </div>
}

export default Profile