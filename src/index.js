import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory();

// App modules
import Submit from './common/submit';
import Home from './common/home';
import Header from './common/Header';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/submit" component={Submit} history={history}/>
      </div>
    </BrowserRouter>,
    document.getElementById('app')
);