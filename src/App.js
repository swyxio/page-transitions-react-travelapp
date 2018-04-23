import React, { Component } from 'react';
import './App.css';
import AppNavigation from './components/AppNavigation.js'
import AppFooter from './components/AppFooter.js'
import IndexPage from './pages/IndexPage.js'
import GroupPage from './pages/GroupPage.js'
import PlacePage from './pages/PlacePage.js'
import { Provider } from 'unstated';
import { WithState } from './store';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <AppNavigation />
          <WithState>
            {$ =>
              <Switch>
                <Route exact path="/" render={() => $.updatePage('index') || <IndexPage />} />
                <Route path="/group" render={() => $.updatePage('group') || <GroupPage />} />
                <Route path="/place" render={() => $.updatePage('place') || <PlacePage />} />
              </Switch>
            }
          </WithState>
          <AppFooter />
        </Provider>
      </Router>
    );
  }
}

export default App;
