import React, { useContext } from "react";
import "./comments.scss";
import {AuthContext} from "../../context/authContext";

const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    //temp
    const comments = [
        {
            id:1,
            desc: "Oh wow!",
            name: "Cris Pico",
            profilePicture: 
                "https://ca.slack-edge.com/TKZN62HDF-U032R2US8PJ-176e9dcb1912-512",
        },
        {
            id:2,
            desc: "Real Nice!",
            name: "Delvin Reyes",
            profilePicture: 
                "https://ca.slack-edge.com/TKZN62HDF-U0321ASEEEP-5ab2534d346e-512",
        },
    ]
    return(
        <div className="comments">
            <div className="write">
            <img src={currentUser.profilePic} alt=""/>
            <input type="text" placeholder="write a comment"/> 
            <button>Send</button>
            </div>
            {comments.map(comments=>(
                <div className="comment">
                    <img src={comments.profilePicture} alt=""/>
                    <div className="info">
                        <span>{comments.name}</span>
                        <p>{comments.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div> 
            ))
        }</div>
    )
}

export default Comments