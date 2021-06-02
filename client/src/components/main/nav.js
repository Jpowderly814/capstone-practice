import './nav.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from '../auth/login';
//import Trails from '../trails/trails';
import Home from './home';
import Cocktail from '../cocktails/cocktails';

function Nav() {
  return(
      <div>
          <Router>
        <nav>
        <Link to="/">
            <h3>Home</h3>
        </Link>
        <ul className ="nav-links">
            <Link to='/login'>
                <li>Login</li>
            </Link>
            <Link to='/browse'>
                <li>Cocktails</li>
            </Link>
            
        </ul>

    </nav>
   
    
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/browse" component={Cocktail}/>
    
    </Router>
    </div>
    
 
  );
}

export default Nav;
