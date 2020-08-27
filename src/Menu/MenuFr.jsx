import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {
        BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom';
import Home from '../Home/Home';
import Authentifier from '../Authentification/Authentifier';
import AddAdministrator from '../Authentification/AdminSpace/Add/AddAdministrator';
import AddProfessor from '../Authentification/ProfessorSpace/Add/AddProfessor';
import AddStudent from '../Authentification/StudentSpace/Add/AddStudent';
import AddParent from '../Authentification/ParentSpace/Add/AddParent';

export default class MenuFr extends Component {

    render() {
        return (
            <>
                <Router>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">School Editor Management</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/auth">S'inscrire</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                     <Switch>
                        <Route exact path='/' component={ Home } />
                        <Route  path='/auth' component={ Authentifier } />
                        <Route path='/InscriptionAdmin' component={AddAdministrator} />
                        <Route path='/InscriptionProfesseur' component={AddProfessor} />
                        <Route path='/InscriptionStudent' component={AddStudent} />
                        <Route path='/InscriptionParent' component={AddParent} />
                     </Switch>
                  </Router>
   
            </>
        )
    }
}