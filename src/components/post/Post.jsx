import React from 'react';
import { Link } from "react-router-dom";
import "./post.scss";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Comments from '../comments/Comments';
import { useState } from 'react';

const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false)


    //temp
    const liked = false;

    return (
        <div className="post">
            <div className="container">
            <div className="user">
                <div className="userInfo">
                <img src={post.profilePic} alt=''/>
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color:"inherit"}}>
                    <span className="name">{post.name}</span>
                    </Link>
                    <span className="date">1 min ago</span>
                    
                </div>
            </div>
            </div>
            <MoreHorizOutlinedIcon/> 
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
            </div>
            <div className="info">
                <div className="item">
                {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                 Likes
                </div>
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                 <TextsmsOutlinedIcon/>
                 Comments
            </div>
            {commentOpen && <Comments/>}
            </div>
        </div>
    )
}

export default Post 