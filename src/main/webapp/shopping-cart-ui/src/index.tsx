import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './components/App/App';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import NavBars from './components/NavBars';

ReactDOM.render(
    <BrowserRouter>
    <NavBars />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
