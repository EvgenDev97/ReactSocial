import React from "react";
import {useRef} from "react";

const Post = (props)=>{

    const {posts,addPost, newPostText, changeNewPostText} = props
    let  newPostElem = useRef(null)

    let addPostFunc = ()=>{
        addPost();

    }

    const onNewPostChange =()=>{
        let text = newPostElem.current.value;
        changeNewPostText(text)

    }

    return <div>

        {posts.map( p => <div key={p.id}>{p.post}</div>)}
        <div>
            <textarea ref={newPostElem}
                      onChange={onNewPostChange}
                      name="" id="" cols="20" rows="10" value={newPostText} />

            <div>
                <button onClick={addPostFunc}>addPost</button>
            </div>
        </div>
    </div>
}

export default Post