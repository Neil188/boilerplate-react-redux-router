import { login, logout, startLogin, startLogOut } from '../../actions/auth';

jest.mock('../../firebase');

test('should generate login action object', () => {
    const DUMMYUID = 'xxx123';
    const action = login(DUMMYUID);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: DUMMYUID,
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});

test('should call startLogin with googleAuth', () => {
    const expected = 'signInWithPopup(googleAuthProvider)'
    const action = startLogin()();
    expect(action).toEqual(expected);
});

test('should call startLogOut', () => {
    const expected = 'signOut'
    const action = startLogOut()();
    expect(action).toEqual(expected);
});
