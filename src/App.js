import React from 'react';
import Home from './Pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
      </ BrowserRouter>
    </>
  );
}


export default App;
