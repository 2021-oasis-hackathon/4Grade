import React, { useState } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Main, SignIn, SignUp, MetaBus } from './pages';

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Main userObj={userObj}/>
                        </Route>
                        <Route path="/metabus">
                            <MetaBus userObj = {userObj}/>
                        </Route>
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                            {/* <SignIn userObj={userObj}/> */}
                            <Main userObj={userObj}/>
                        </Route>
                        <Route path="/signUp">
                            <SignUp userObj = {userObj}/>
                            </Route>
                        <Redirect from="*" to="/"/>
                    </>                        
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;