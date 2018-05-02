import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBTyEr_Gouf6El6w0Q1CYfGBRxm5LbP1jk',
    authDomain: 'auth-test-project-1.firebaseapp.com',
    databaseURL: 'https://auth-test-project-1.firebaseio.com',
    projectId: 'auth-test-project-1',
    storageBucket: 'auth-test-project-1.appspot.com',
    messagingSenderId: '1094554780910'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();