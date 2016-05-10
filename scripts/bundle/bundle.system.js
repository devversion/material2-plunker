System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  packages: {
    'src': {
      defaultExtension: 'ts'
    }
  },
  map: {
    '@angular': 'node_modules/@angular',
    '@angular2-material': 'node_modules/@angular2-material',
    'rxjs': 'node_modules/rxjs',
    'typescript': 'node_modules/typescript/lib/typescript.js'
  }
});

var _packageConfig = {};
var _defaultPackages = [
  '@angular/core', '@angular/common', '@angular/compiler', '@angular/http', '@angular/router',
  '@angular/platform-browser', '@angular/platform-browser-dynamic', 'rxjs'
];

// Angular Material 2 Packages to load.
var _materialPackages = [
  'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
  'progress-circle', 'radio', 'sidenav'
];

_materialPackages.forEach(function(item) {
  // All Material 2 components are prefixed with  @angular2-material and use
  // the components name as entry point.
  _packageConfig['@angular2-material/' + item] = { main: item };
});

_defaultPackages.forEach(function (item) {
  // Angular's Default Packages are always using `index` as an entry point.
  _packageConfig[item] = {
    main: 'index',
    defaultExtension: 'js' 
  };
});

// Apply the new generated packages to the SystemJS configuration.
System.config({ packages: _packageConfig });
