import {createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState (
        JSON.parse(localStorage.getItem("user")) || null 
    );
    const [dataBase,] = useState (
        {
            user:
            {username: "Caston Boyd",
            password: "1234",}
            



        }
    )

    

    const login = () => {
        //to do 
        setCurrentUser({id:1,name:"Caston Boyd", profilePic:"https://ca.slack-edge.com/TKZN62HDF-U030UPC612A-aeff4bd89c5a-512",})
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};