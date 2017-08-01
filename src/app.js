import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

// App modules
import Car from './car/car';
import About from './common/about';


class App extends Component {
    render(){
        return (
          <div className="App">
            <div className="container">
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