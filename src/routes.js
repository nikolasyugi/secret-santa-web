import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    );
}

export default Routes;
