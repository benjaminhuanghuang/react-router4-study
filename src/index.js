import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

// App modules
import Submit from './common/submit';
import Home from './common/home';


ReactDOM.render(
    <Router>
         <div className="container">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">React Router 4</a>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
                      <li><NavLink activeClassName="activeNav" to="/submit">Submit a Recipe</NavLink></li>
                    </ul>
                  </div>
                </div>
              </nav>
            <Route exact path="/" component={Home}/>
            <Route path="/submit" component={Submit} history={history}/>
          </div> 
     </Router>,
    document.getElementById('app')
);