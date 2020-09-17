import React from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuFr from './Menu/MenuFr';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
 
export default class App extends React.Component {

 
  render(){
    return (
        <MenuFr />
    );
}
}
