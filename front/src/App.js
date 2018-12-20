import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Challenges from './components/Challenge'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Challenges} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
