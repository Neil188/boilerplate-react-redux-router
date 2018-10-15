import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { login, logout } from '../actions/auth';
import AppRouter, { history } from '../routers/AppRouter';

const target = document.getElementById('app');

export const jsx = store => (
    <Provider store={store} >
        <AppRouter />
    </Provider>
)

let hasRendered  = false;
export const renderApp = (store) => {
    if (!hasRendered) {
        ReactDOM.render(jsx(store), target);
        hasRendered = true;
    }
}

const handleAuthStateChanged = (store) => user => {
    if (user) {
        store.dispatch( login(user.uid) );
        renderApp(store);
        history.location.pathname === '/' && history.push('/dashboard');
    } else {
        store.dispatch( logout() );
        renderApp(store);
        history.push('/');
    }
}

export default handleAuthStateChanged;
