import React, { useContext } from "react";
import "./comments.scss";
import {AuthContext} from "../../context/authContext";
import { useState } from "react";

const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    //temp
    const [comments, setComments] = useState ([
        {
            id:1,
            desc: "Look Here!",
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
    ]) 
    const [newcomments, setNewComments] = useState ("")
    const addComments = () => {
        comments.push({
            id:3,
            desc: newcomments,
            name: "Caston Boyd",
            profilePicture:
                "https://ca.slack-edge.com/TKZN62HDF-U030UPC612A-aeff4bd89c5a-512"
        })
        setComments(comments) 
        console.log(comments)
    }

    return(
        <div className="comments">
            <div className="write">
            <img src={currentUser.profilePic} alt=""/>
            <input type="text" placeholder="write a comment" onChange={e => {setNewComments(e.target.value)}}/> 
            <button onClick={()=>{ console.log("whats clicked")
                addComments()}}>Send</button>
            </div>
            {comments.map((comments, i)=>(
                <div className="comment"key={"comment" + i}>
                    <img src={comments.profilePicture} alt=""/>
                    <div className="info">
                        <span>{comments.name}</span>
                        <p>{comments.desc}</p>
                    </div>
                    <span className="date"></span>
                </div> 
            ))
        }</div>
    )
}

export default Comments