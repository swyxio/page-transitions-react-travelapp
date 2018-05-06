import React from 'react';
import './App.css';
import AppNavigation from './components/AppNavigation.js';
import IndexPage from './pages/IndexPage.js';
import GroupPage from './pages/GroupPage.js';
import PlacePage from './pages/PlacePage.js';
import { Provider } from 'unstated';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function App() {
  return (
    <Router>
      <Provider>
        <AppNavigation />
        <TransitionGroup exit={false}>
          <CSSTransition key={window.location} classNames="page" timeout={1000}>
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route path="/group" component={GroupPage} />
              <Route path="/place" component={PlacePage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Provider>
    </Router>
  );
}
