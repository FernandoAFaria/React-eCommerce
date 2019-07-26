import React from 'react';
import Homepage from './containers/homepage/homepage';
import Navbar from './components/navbar/navbar.component';
import Shop from './containers/shop/shop.component'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route  path='/shop/:id' component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
