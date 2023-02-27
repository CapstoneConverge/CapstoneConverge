import React from 'react';
import "./rightBar.scss"

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>People You May Know</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://ca.slack-edge.com/TKZN62HDF-U032R2US8PJ-176e9dcb1912-512" alt=''/>
                            <span>Cris Pico</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://ca.slack-edge.com/TKZN62HDF-U0321ASEEEP-5ab2534d346e-512" alt=''/>
                            <span>Delvin Reyes</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://ca.slack-edge.com/TKZN62HDF-U0321ASEEEP-5ab2534d346e-512" alt=''/>
                            <p>
                            <span>Delvin Reyes</span> changed their Profile picture
                            </p>
                        </div>
                        <span>10 minuntes ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar 