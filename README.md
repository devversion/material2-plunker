# material2-plunker
Standalone Template for Angular Material 2 Demos.

### What is it for?

This is a basic Angular Material 2 App, which transpiles Typescript on demand and loads all dependencies from the internet.
- This is perfect for a template, because it's not depending on any dependency managers.

Developers, who have an issue with [Material 2](http://github.com/angular/material2), can simply use this as a [Plunker Template](http://plnkr.co/edit/o077B6uEiiIgkC0S06dd?p=preview) to demonstrate their issue.

### How does it load all its dependencies?
The Template loads all its dependencies from Firebase.<br/>
We currently update all modules manually ([read more](#cooming-soon)) and deploy them to [Firebase](http://www.firebase.com).

Currently bundled modules are:
- `@angular`,
- `@angular2-material`
- `rxjs`
- `zone.js`,
- `reflect-metadata`

So, you as you can see, we provide a bundle for all modules which are required to run a Angular 2 App.

### Cooming soon
- `Automatic Module Updating`<br/>
  It is planned, to update all modules automatically, when new changes were commited to Angular Material 2 
  
### Links
- [Plunker Template](http://plnkr.co/edit/o077B6uEiiIgkC0S06dd?p=preview)
- [Asset Host](https://angular-code.firebaseapp.com)
- [Bundle File](https://angular-code.firebaseapp.com/bundle.js)
