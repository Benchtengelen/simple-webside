import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';



function App() {
  return (
      <Router> 
     
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link  className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link  className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link  className="nav-link" to="/contact">Contact</Link>
      </li>
   
    </ul>
  </div>
</nav>

   <Switch>
          <Route exact path="/" component={Home} />   
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

   
</Router>

    
  )
}

export default App;
