import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Done from "./pages/Done";
import Friend from "./pages/Friend";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/done" component={Done} />
            <Route path="/friend" component={Friend} />
        </Switch>
    );
}

export default Routes;
