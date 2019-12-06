import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Done from "./pages/Done";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/done" exact component={Done} />
        </Switch>
    );
}

export default Routes;
