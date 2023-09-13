import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss"

const Profile = (props) => {

    const {profileState,addPost,changeNewPostText} = props


    return <div className="content">

        <div>
            ava + desk
        </div>
        <div>
            <MyPosts posts={profileState.posts}
                     changeNewPostText={changeNewPostText}
                     newPostText={profileState.newPostText}
                     addPost={addPost} />
        </div>
    </div>
}

export default Profile