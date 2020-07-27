import { firebase, googleAuthProvider } from '../../components/Firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}