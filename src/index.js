import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import Libraries from './pages/libraries.jsx';
import SignUp from './pages/signUp.jsx';
import Topic from './components/topic.jsx';

//registerServiceWorker();

ReactDOM.render((
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={App} />
     <Route exact path="/libraries" component={Libraries} />
     <Route path="/libraries/:name" component={Topic} />
     <Route path="/signUp" component={SignUp} />
   </Switch>
   </BrowserRouter> 
), document.getElementById('root'))