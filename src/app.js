import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

// App modules
import Car from './car/car';
import About from './common/about';


class App extends Component {
    render(){
        return (
          <div>
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
                      <li className="active"><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/submit">Submit a Recipe</NavLink></li>
                    </ul>
                  </div>
                </div>
              </nav>
           </div> 
          </div>
        );
    }
}

render(<App />, document.getElementById('app'));

// render(
//     <BrowserRouter>
//         <Route path="/" component={Home}/>
//         <Route path="/car" component={Car}/>
//         <Route path="/about" component={About}/>
//     </BrowserRouter>,
//     document.getElementById('app')
// );