import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// App modules
import Submit from './common/submit';
import Home from './common/home';


ReactDOM.render(
    <Router>
        <div>
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/submit">Submit</Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/submit" component={Submit}/>
        </div>
    </Router>,
    document.getElementById('app')
);