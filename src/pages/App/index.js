import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../register';
import HomePage from '../HomePage';
import Login from '../login';
import List from '../list';
import GroupInfo from '../groupInfo';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/list" component={List} />
      <Route path="/list/:urlname" component={GroupInfo} />
    </Switch>
  );
}

export default App;
