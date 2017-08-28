const JsLibraries = {
      libraries:[
          {_id: 1, name: "React", text: "The incredibly popular industry titan that continues to grow in popularity year over year, built and maintained by Facebook."},
          {_id: 2, name: "Angular", text: "Backed by Google, Angular quickly became an industry standard. Angular 2 became official last year, and its quite a departure from Angular 1. More on this later!"},
          {_id: 3, name: "Ember", text: "Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help you get your job done."},
          {_id: 4, name: "Vue", text: "Developed by an original member of the Angular 1 team, Vue shares its roots with Angular (to see just how similar, check out AngularToVue)."}
      ],

      all: function(){return this.libraries}
}

export default JsLibraries