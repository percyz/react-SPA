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
              <img src={logo} className="App-logo" alt="logo" />

              <ul className="nav nav-pills">
                <li><Link to="/"><h3>Home</h3></Link></li>
                {/* <li><Link to="/libraries"><h3>Libraries</h3></Link></li> */}
                <li><Link to="/signUp"><h3>Sign In</h3></Link></li>
              </ul>
          </div> 

          {/* the navigation of page */}
          <Jumbotron className="App_header_Jumbotron">
            <h2>Pick a JavaScrapt framework</h2>
            <h2>Leave your comments</h2>
          </Jumbotron>
        </div>
    );
  }
}
