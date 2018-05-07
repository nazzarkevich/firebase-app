import React from 'react';

const User = props => {
    return (
        <div className="user-profile">
            <h3>Welcome {props.user.displayName}</h3>
            <img 
                src={props.user.photoURL} 
                alt={props.user.displayName}/>
            <p>Email: {props.user.email}</p>
        </div>
    );
}

export default User;