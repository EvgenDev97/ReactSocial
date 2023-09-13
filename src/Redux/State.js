import {rerender} from "../render";


let state = {
    profilePage:{
        posts:[
            {id:1, post:"Post1"},
            {id:2, post:"Post2"}
        ],
        newPostText:""

    },
    messagesPage:{
        dialogs:[
            {id:1, name:"nameOne"},
            {id:2, name:"nameTwo"},
            {id:3, name:"nameThree"}
        ],
        msg:[
            {id:1,msg:"Hey"},
            {id:2,msg:"How`re you"},
            {id:3, msg:"blablabla"}
        ]
    },
    friendPage:{
        friends:[
            {id:1, name:"friendOne", avatar:"img1"},
            {id:2, name:"friendTwo",avatar:"img2"}
        ]
    }
}


export let addPost = ()=>{

    let newPost = {
        id:3,
        post: state.profilePage.newPostText,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerender(state)
}

export  let changeNewPostText =(newText)=>{
    state.profilePage.newPostText = newText
    rerender(state)
}

export default  state