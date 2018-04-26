import React, { Component } from 'react';
import './App.css';
import AppNavigation from './components/AppNavigation.js'
import IndexPage from './pages/IndexPage.js'
import GroupPage from './pages/GroupPage.js'
import PlacePage from './pages/PlacePage.js'
import { Provider } from 'unstated';
import { Subscribe, State } from './store';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <AppNavigation />
            <Subscribe to={[State]}>
              {$ =>
                <TransitionGroup exit={false}>
                  <CSSTransition key={window.location} classNames="page" timeout={2000}>
                    <Switch>
                      <Route exact path="/" render={() => $.updatePage('index') || <IndexPage />} />
                      <Route path="/group" render={() => $.updatePage('group') || <GroupPage />} />
                      <Route path="/place" render={() => $.updatePage('place') || <PlacePage currentUser={$.selectedUser()} />} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              }
            </Subscribe>
        </Provider>
      </Router>
    );
  }
}

export default App;
