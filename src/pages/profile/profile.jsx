import React from 'react';
import "./profile.scss";
import PlaceIcon from '@mui/icons-material/Place';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Posts from "../../components/posts/Posts"




const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src="https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover" />
                <img src="https://ca.slack-edge.com/TKZN62HDF-U032R2US8PJ-176e9dcb1912-512" alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                    <a href="http://instagram.com">
                        <InstagramIcon fontSize="large" /> 
                    </a>
                    <a href="http://linkedin.com">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    </div>
                    <div className="center">
                        <span>Cris Pico</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon/> 
                                <span>USA</span>
                            </div>
                            <div className="item">
                                <LanguageIcon/> 
                                <span>English</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/> 
                    </div>
                </div>
                <Posts/>
            </div>
        </div>
    );
};

export default Profile 