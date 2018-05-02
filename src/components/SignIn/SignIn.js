import React from 'react';
import { auth, googleAuthProvider } from '../../firebase';

const SignIn = props => {
    return (
        <div>
            <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>Sign In</button>
        </div>
    );
}

export default SignIn;