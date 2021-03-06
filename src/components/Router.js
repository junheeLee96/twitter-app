import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  const [ProClick, isProClick] = useState(false);
  return (
    <Router>
      {isLoggedIn && (
        <Navigation
          userObj={userObj}
          isProClick={isProClick}
          ProClick={ProClick}
        />
      )}
      <Switch>
        <>
          {isLoggedIn ? (
            <div
              style={{
                maxWidth: 890,
                width: "100%",
                margin: "0 auto",
                marginTop: 80,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <HashRouter base="/">
                <Home
                  userObj={userObj}
                  refreshUser={refreshUser}
                  ProClick={ProClick}
                />
              </HashRouter>
              <Route exact path="/profile">
                <Profile userObj={userObj} refreshUser={refreshUser} />
              </Route>
            </div>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
            </>
          )}
        </>
      </Switch>
    </Router>
  );
};

export default AppRouter;
