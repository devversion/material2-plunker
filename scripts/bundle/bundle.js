var SystemJSBuilder = require('systemjs-builder');
var path = require('path');

var relativeRoot = path.relative(process.cwd(), __dirname + '/../../');
var builder = new SystemJSBuilder(relativeRoot, './scripts/bundle/bundle.system.js');

builder.buildStatic('src/app.component.ts', 'dist/bundle.js', {
  minify: true
}).then(() => {
  console.log("Successfully bundled all dependencies");
});