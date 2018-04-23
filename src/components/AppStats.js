import React, { Component } from 'react';
import { WithState } from '../store';
import './AppStats.css'
class App extends Component {
  render() {
    return (
      <WithState>
        {$ => {
          const selectedUser = $.selectedUser()
          return <div className="stats">
            <div className="bio">
              <p>{selectedUser.bio}}</p>
            </div>
            <div>
              <span className="desc">Followers</span><br />
              <span className="lg">{selectedUser.followers}</span>
            </div>
            <div>
              <span className="desc">Following</span><br />
              <span className="lg">{selectedUser.following}</span>
            </div>
          </div>
        }}
      </WithState>
    )
  }
}

export default App;
