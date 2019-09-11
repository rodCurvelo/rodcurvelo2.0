import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";

class App extends Component {
  render(){
    return (
      <Router>
          <nav className="light-green darken-1" role="navigation">
          <div className="nav-wrapper container "><a id="logo-container" href="#" className="brand-logo black-text">WHO I AM</a>
            <ul className="right hide-on-med-and-down ">
              <li>
                <Link to="/" className="black-text blue light-green darken-1">HOME</Link>
              </li>
              <li className="black-text blue light-green darken-1">
                <Link to="/create" className="black-text blue light-green darken-1">CREATE TODOs</Link>  
              </li> 
            </ul>
            <ul id="nav-mobile" className="sidenav">
              <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons white-text">menu</i></a>
          </div>
        </nav>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
    </Router>
    );
  }
}


export default App;
