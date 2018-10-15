import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import handleAuthStateChanged,  { renderApp, LoadableProvider }
    from '../../utils/handleAuthStateChanged';
import { login, logout } from '../../actions/auth';
import { history } from '../../routers/AppRouter';

jest.mock('react-dom');
jest.mock('../../actions/auth');
jest.mock('../../routers/AppRouter');

const store = {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn()
}

test('should render LoadableProvider correctly', () => {
    const wrapper = shallow(<LoadableProvider store={store} />);
    expect(wrapper).toMatchSnapshot();
});

test('on first call renderApp should call ReactDOM', () => {
    renderApp(store);
    expect(ReactDOM.render).toBeCalled();
});

test('if already rendered do not call render again', () => {
    ReactDOM.render.mockClear();
    renderApp(store);
    expect(ReactDOM.render).not.toBeCalled();
});

test('Handle user logged out auth state change', done => {
    handleAuthStateChanged(store)(null)
        .then( () => {
            expect(store.dispatch).toBeCalled();
            expect(logout).toBeCalled();
            expect(login).not.toBeCalled();
            expect(history.push).toHaveBeenLastCalledWith('/');
            done();
        })
});

test('Handle user logged in auth state change, with redirect', done => {
    const user = {
        uid: 1
    }
    logout.mockClear();
    login.mockClear();
    history.location.pathname = '/'

    handleAuthStateChanged(store)(user)
        .then( () => {
            expect(logout).not.toBeCalled();
            expect(login).toBeCalled();
            expect(login).toHaveBeenLastCalledWith(user.uid);
            expect(history.push).toHaveBeenLastCalledWith('/dashboard');
            done();

        })
});

test('Handle user logged in auth state change, without redirect', () => {
    const user = {
        uid: 1
    }
    history.location.pathname = '/test'
    history.push.mockClear();

    handleAuthStateChanged(store)(user);

    expect(history.push).not.toBeCalled();
});
