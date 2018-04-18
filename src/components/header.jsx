import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css'; 

export default class Header extends Component {
  render() {
    return (
        <div className="column">

          {/* the title of page */}
          <div className="App-header">
              <div className="App-header-logo">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-header-logo-title">
                  <h1 className="App-header-logo-title-color">JS</h1><h1>Comments</h1>
                </div>
              </div>

              <div className="nav nav-pills">
                 <Link to="/signUp"><h3 className="App_header_Jumbotron_text">Sign In</h3></Link>
              </div>
          </div> 

          {/* the navigation of page */}
          <div className="App_header_Jumbotron">
            <h3><Link to="/" className="App_header_Jumbotron_text">Home</Link></h3>
            <h3><Link to="/" className="App_header_Jumbotron_text">About Us</Link></h3>
            <h3><Link to="/"className="App_header_Jumbotron_text">Contact Us</Link></h3>
            {/* <li><Link to="/libraries"><h3>Libraries</h3></Link></li> */}
          </div>
        </div>
    );
  }
}
