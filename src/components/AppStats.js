import React, { Component } from 'react';
import './AppStats.css'
class App extends Component {
  render() {
    const { selectedUser } = this.props
    return (<div className="stats">
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

    )
  }
}

export default App;
