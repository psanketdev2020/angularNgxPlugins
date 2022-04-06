import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-scroll',
  templateUrl: './ngx-scroll.component.html',
  styleUrls: ['./ngx-scroll.component.css']
})
export class NgxScrollComponent implements OnInit {

  numbers = [];
  

  constructor() { 
    for(let i=0; i<=500;i++){
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
  }

  jsFreamworks = [
    {
      name: 'Angular2 nad Higher',
      discription: `Angular 2+ marks a turning point in the history of the Angular framework. Starting as a solid
      Backbone competitor, AngularJS (read: Angular 1.x versions) nearly became obsolete when React came
      out. (Angular 1.x versions are still in demand, however, as many current projects rely on it and the
      shift to Angular 2+ will take several years.) Angular has substantially changed its architecture to
      come to terms with React. So what does Angular offer now?`,
      img: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
      name: 'React',
      discription: `React stormed the JS world several years ago to become its definite leader. React encourages you to
      use a reactive approach and a functional programming paradigm. React also introduced many of its own
      concepts to define its unique (at the time it was created) approach to frontend web development. To
      use React, you’ll have to master a component-based architecture, JSX, and unidirectional data flow.
      The unidirectional data flow is implemented by Flux.`,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
    },
    {
      name: 'Vue',
      discription: `At first sight, you might say that the Vue library is just a mix of Angular and React. In fact, Evan
      You, creator of Vue, borrowed concepts from Angular and React. For example, Vue wants you to store
      component logic and layouts along with stylesheets in one file. That’s how React works without
      stylesheets. To let Vue components talk to each other, Vue uses the props and state objects. This
      approach also existed in React before Vue adopted it.`,
      img: 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png'
    },
    {
      name: 'Ember',
      discription: `Ember, just like Backbone and AngularJS, is an “ancient” JavaScript framework. But the fact that
      Ember is comparatively old doesn’t mean that it’s out of date. Ember lets you implement
      component-based applications just like Angular, React, and Vue do. In fact, Ember inspired many other
      JavaScript frameworks. For example, Vue’s router library borrowed ideas from Ember router.`,
      img: 'https://emberjs.com/images/brand/ember_Tomster-Lockup.png'
    },
    {
      name: 'Backbone',
      discription: `Backbone has only one strong dependency – the Underscore library that gives us many helper functions
      for convenient cross-browser work with JavaScript. Unlike many other full-fledged JavaScript
      frameworks, Backbone attempts to reduce complexity to avoid performance issues. More specifically, you
      won't get performance problems because of two-way data binding or built-in loops like in AngularJS.`,
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/BackboneJS_logo.png'
    }
  ]

}
