import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import ConLoginPage from '../components/LoginPage';
import ConPrivateRoute from './PrivateRoute';
import ConPublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Switch>
                <ConPublicRoute
                    exact
                    path='/'
                    component={ConLoginPage}
                />
                <ConPrivateRoute
                    path='/dashboard'
                    component={DashboardPage}
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;
