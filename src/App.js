import React, {Component} from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Link,
 } from 'react-router-dom'

 import Home from './Home'
 import Login from './Login'

class App extends Component {
  
  
  render(){
    return (
      <Router>
      <div>
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header page-scroll">
          <a className="navbar-brand page-scroll" href="#page-top">
              <img src="images/logo.png" height="30" alt="logo" />
          </a>
        </div>
  
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Menu item</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        
  
      </div>
    </nav>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    

  
    
    
  </div>
  </Router>
    );

  }
  
}

export default App;
