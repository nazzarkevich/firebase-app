import React from 'react';
import { auth } from '../../firebase';

const SignOut = props => {
    return (
        <div>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    );
}

export default SignOut;