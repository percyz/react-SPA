import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css'; 

export default class Header extends Component {
  render() {
    return (
        <div className="App-header row">

          {/* the logo image */}
          <div className="col-md-1">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          {/* the title of page */}
          <div className="col-md-1">
            <h3 className="title-header">OCDE TEST</h3>
          </div>

          {/* the navigation of page */}
          <div className="right-header col-md-10">
           
            <ul className="nav nav-pills">
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/libraries" >Libraries</Link></li>
            </ul>
            <ul className="nav nav-pills signUp"><li><Link to="/signUp">Sign In</Link></li></ul>
            
          </div>
        </div>
    );
  }
}
