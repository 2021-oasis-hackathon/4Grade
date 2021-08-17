import React, { useState } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import GalleryPicture from "./components/GalleryPicture";
import { Main, SignIn, SignUp, Calendar, Recruit, Board, Gallery, Tour } from './pages';

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                          <Main userObj = {userObj} />
                        </Route>
                        <Route path="/recruit">
                          <Recruit userObj = {userObj} />
                        </Route>
                        <Route path="/board">
                          <Board userObj = {userObj} />
                        </Route>
                        <Route path="/gallery">
                          <Gallery userObj = {userObj} />
                        </Route>
                        <Route path="/calendar">
                          <Calendar userObj = {userObj} />
                        </Route>
                        <Route path="/tour">
                          <Tour userObj = {userObj} />
                        </Route>
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                          <SignIn userObj = {userObj} />
                        </Route>
                        <Route path="/signUp">
                          <SignUp userObj = {userObj} />
                        </Route>
                        <Redirect from="*" to="/"/>
                    </>                        
                )}
            </Switch>
    )
}

export default AppRouter;