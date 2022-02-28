import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "../context";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    
    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                { privateRoutes.map((route) => 
                    <Route 
                    key={route.path}
                    path={route.path} 
                    element={route.element}/>
                )}                
                <Route path="*" element={<Posts/>} />        
             </Routes>      
            :
            <Routes>
                { publicRoutes.map((route) => 
                    <Route
                    key={route.path} 
                    path={route.path} 
                    element={route.element}/>
                )}
                <Route path="*" element={<Login/>} />        
             </Routes>
    );
};

export default AppRouter;