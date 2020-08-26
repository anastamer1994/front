import React, { Component } from 'react';
import Login from '../Authentification/Login';
import Authentifier from '../Authentification/Authentifier';
import Home from '../Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../dist/css/menu.css";


export default class Menu extends Component {
  
    render(){
        return(
            <Router>
          
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="space-menu">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to={'/home'} className="nav-link">Gestion Ecole </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="nav">
                            <li className="nav-item ">
                                <Link to={'/auth'} className="nav-link">S'inscrire</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={'/connecter'} className="nav-link">Se Connecter</Link>
                            </li>
                        </ul>
                    </div>
                  
                </nav>    
                <br/>
                <Switch>
                    <Route exact path='/home' component={ Home } />
                    <Route  path='/auth' component={ Authentifier } />
                    <Route  path='/connecter' component={ Login } />
                </Switch>                   
          
        </Router>
        )
    }
} 