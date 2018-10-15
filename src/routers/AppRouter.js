import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Loadable from 'react-loadable';
import NotFoundPage from '../components/NotFoundPage';
import ConLoginPage from '../components/LoginPage';
import LoadingPage from '../components/LoadingPage';
import ConPrivateRoute from './PrivateRoute';
import ConPublicRoute from './PublicRoute';

export const history = createHistory();

/* eslint-disable babel/new-cap */
const LoadableDashboard = Loadable({
    loader: () => import('../components/DashboardPage'),
    loading: LoadingPage
});

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
                    component={LoadableDashboard}
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;
