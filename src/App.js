import React, { Component } from 'react';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {date: null};
  }

  render() {
    
    const people = {
      name:'Alax',
      age:'23'
    };

    return (
      <div className="App">

        {/* The header of the page, including navigation */}
        <Header />
        
        <p></p>

        {/* The body of page */}
        <Content /> 

      </div>
    );
  }
}

