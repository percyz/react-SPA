import React, { Component } from 'react';
import Item from './item.jsx';
import JsLibraries from '../api/jsLibraries.js';

export default class Content extends Component {

  getTasks(){
      return[
          {_id: 1, name: "React", text: "The incredibly popular industry titan that continues to grow in popularity year over year, built and maintained by Facebook.React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."},
          {_id: 2, name: "Angular", text: "Backed by Google, Angular quickly became an industry standard. Angular 2 became official last year, and its quite a departure from Angular 1. More on this later! Angular 2 is an open source JavaScript framework to build web applications in HTML and JavaScript. This tutorial looks at the various aspects of Angular 2 framework which includes the basics of the framework, the setup of Angular and how to work with the various aspects of the framework. Other topics discussed in the tutorial are advanced chapters such as interfaces, nested components and services within Angular."},
          {_id: 3, name: "Ember", text: "Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help you get your job done. Write dramatically less code with Ember's Handlebars integrated templates that update automatically when the underlying data changes."},
          {_id: 4, name: "Vue", text: "Developed by an original member of the Angular 1 team, Vue shares its roots with Angular (to see just how similar, check out AngularToVue). Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries."}
      ];
  }

  render() {

   /* map the array in child component */
   const renderTasks = this.getTasks().map((language)=>{
       return(
           <Item key={language._id} language={language}/>
       )
   })

    return (
        <div className="container">

            {/* the content of body */}
            <div>
                <div className="content-title">
                  <h2>Pick a JavaScrapt framework</h2>
                  <h2>Leave your comments</h2>
                </div>
                {renderTasks}
            </div>
            
        </div>
    );
  }
}