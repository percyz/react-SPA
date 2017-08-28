import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import JsLibraries from '../api/jsLibraries.js';
import '../App.css'; 

export default class Libraries extends Component {

  render() {
    console.log(JsLibraries.all());
    const jsInfo = JsLibraries.all().map((value) =>
       <li key={value._id}><Link to={`/libraries/${value.name}`}>{value.name}</Link></li>
    )

    return (
        <div>

         <h3> There are four javascript libraries </h3>
         <ul>
           {jsInfo}
         </ul>
         <Link to='/'>Back</Link>

        </div>
    );
  }
}
