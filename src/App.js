import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Example from './pages/Example';

import './App.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/example" component={Example} />
    </div>
  );
}

export default App;
