import React from 'react';
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/register.jsx"; 
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useContext } from 'react';
import { AuthContext } from './context/authContext.js';

//Authentication
function App() { 

  const {currentUser} = useContext(AuthContext);

  const Layout = ()=>{
    return(
      <div>
       <Navbar/>
       <div style={{ display: "flex"}}> 
        {/* <LeftBar/> */}
        <div style={{ flex: 6 }}>
        <Outlet/>
        </div>
        <RightBar/>
       </div>
      </div>
    );
  };

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to ="/login"/>
    }

    return children
  }

  //Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ),
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/profile/:id",
          element: <Profile/>
        }
      ]

    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>, 
    }, 
  ]);

  return (
    <div>
       <RouterProvider router={router} /> 
    </div>
  )
};


export default App;