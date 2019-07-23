import React from 'react';
import Homepage from './containers/homepage/homepage';
import Navbar from './components/navbar/navbar.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
