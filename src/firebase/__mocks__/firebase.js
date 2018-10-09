// const firebase = jest.genMockFromModule('firebase');

const firebase = {
    auth: () => ({
        signInWithPopup: x => `signInWithPopup(${x})`,
        signOut: _ => 'signOut'
    })
}
const googleAuthProvider = 'googleAuthProvider';

export { firebase, googleAuthProvider }
