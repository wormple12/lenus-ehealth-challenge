import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, NoMatch } from "./screens";

export const MainRoutes: React.FC = props =>
(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
    </Switch>
);