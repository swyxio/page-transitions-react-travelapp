import React, { Component } from 'react';
import './AppMenuDrawer.css'
import { Link } from "react-router-dom";
// import { WithState } from '../store';
class App extends Component {
  render() {
    const { firstName, menuOpened } = this.props
    return (<div
    // <transition
      mode="out-in"
    // @before-enter="beforeEnter"
    // @enter="enter"
    // :css="false"
    >
      {menuOpened && <div class="menudrawer">
        <Link exact to="/">{firstName}'s Home</Link><br />
        <Link to="/place">{firstName}'s Places</Link><br />
        <Link to="/group">{firstName}'s Group Trips</Link>
      </div>
      }
    </div>
    )
  }
}

export default App;
