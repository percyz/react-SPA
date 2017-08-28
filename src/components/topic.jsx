import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JsLibraries from '../api/jsLibraries.js';

export default class Topic extends Component {
  render() {
    return (
        <div>
            <h3>This is {this.props.match.params.name} topic</h3>
            <Link to='/libraries'>Back</Link>
        </div>
    );
  }
}
