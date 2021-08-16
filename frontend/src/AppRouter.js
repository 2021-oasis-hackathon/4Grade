import React, { useState } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import GalleryPicture from "./components/GalleryPicture";
import { Main, SignIn, SignUp, Calendar, Recruit, Board, Gallery, Tour } from './pages';

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" render={(props) => <Main userObj = {userObj} {...props}/>} />
                        <Route path="/recruit/:category" render={(props) => <Recruit userObj = {userObj} {...props}/>} />
                        <Route path="/board/:category" render={(props) => <Board userObj = {userObj} {...props}/>} />
                        <Route path="/gallery" render={(props) => <Gallery userObj = {userObj} {...props}/>} />
                        <Route path="/calendar" render={(props) => <Calendar userObj = {userObj} {...props}/>} />
                        <Route path="/tour" render={(props) => <Tour userObj = {userObj} {...props}/>} />
                    </>
                ) : (
                    <>
                        <Route exact path="/" render={(props) => <Main userObj = {userObj} {...props}/>} />
                        <Route exact path="/signUp" render={(props) => <SignUp userObj = {userObj} {...props}/>} />
                        <Redirect from="*" to="/"/>
                    </>                        
                )}
            </Switch>
    )
}

export default AppRouter;