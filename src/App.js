import React, { Component } from 'react';
import './App.css';

import { auth } from './firebase';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import User from './components/User/User';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
}

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      console.log('AUTH', currentUser)
      this.setState({
        currentUser: currentUser
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Firebase test-app</h1>
        {!this.state.currentUser && <SignIn />}
        {this.state.currentUser 
        && 
          <div>
            <User user={this.state.currentUser}/>
            <SignOut />
          </div>}
      </div>
    );
  }
}

export default App;
