import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import LoadingPage from '../components/LoadingPage';
import { login, logout } from '../actions/auth';

const target = document.getElementById('app');

/* eslint-disable babel/new-cap */
export const LoadableProvider = Loadable.Map({
    loader: {
        redux: () => import('react-redux'),
        AppRouter: () => import('../routers/AppRouter',)
    },
    loading: LoadingPage,
    render(loaded, props) {
        const Provider = loaded.redux.Provider;
        const AppRouter = loaded.AppRouter.default;
        return (
            <Provider {...props}>
                <AppRouter />
            </Provider>
        )
    }
});

let hasRendered  = false;
export const renderApp = (store) => {
    if (!hasRendered) {
        ReactDOM.render(<LoadableProvider store={store} />, target);
        hasRendered = true;
    }
}

const handleAuthStateChanged = (store) => user => {
    return import('../routers/AppRouter')
        .then(({ history }) => {

            if (user) {
                store.dispatch( login(user.uid) );
                renderApp(store);
                history.location.pathname === '/' && history.push('/dashboard');
            } else {
                store.dispatch( logout() );
                renderApp(store);
                history.push('/');
            }

        })
}

export default handleAuthStateChanged;
