import React from 'react';
import Posts from "../../components/posts/Posts";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
             <input type="text" placeholder="Select Song"/> 
            <button className='BUTTON'>Post</button>
           <Posts/> 
        </div>
    )
}

export default Home