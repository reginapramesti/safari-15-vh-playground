import { createBrowserHistory } from 'history';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/designs">
          <Designs />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
      <ul class="navtabs">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/designs">Designs</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h3 class="stickyheader">Body scrolling</h3>
      <div class="container">
        <div class="box darkgray"/>
        <div class="box darkgray"/>
        <div class="box darkgray"/>
        <div class="box darkgray"/>
        <div class="box darkgray"/>
        <div class="box darkgray"/>
      </div>
    </>
  );
}

function Designs() {
  return (
    <>
      <h3 class="stickyheader">Div scrolling container height 100vh</h3>
      <div class="container fixedHeightVh">
        <div class="box gray"/>
        <div class="box gray"/>
        <div class="box gray"/>
        <div class="box gray"/>
        <div class="box gray"/>
        <div class="box gray"/>
      </div>
    </>
  );
}

function Menu() {
  return (
    <>
      <h3 class="stickyheader">Div scrolling container height 100%</h3>
      <div class="container fixedHeightPercent">
        <div class="box lightgray"/>
        <div class="box lightgray"/>
        <div class="box lightgray"/>
        <div class="box lightgray"/>
        <div class="box lightgray"/>
        <div class="box lightgray"/>
      </div>
    </>
  );
}

export default App;
