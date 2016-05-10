var SystemJSBuilder = require('systemjs-builder');
var path = require('path');
var config = require('./../config.json');
var fs = require('fs');

var relativeRoot = path.relative(process.cwd(), __dirname + '/../../');
var builder = new SystemJSBuilder(relativeRoot, './scripts/bundle/bundle.system.js');

buildSystemEntry();

builder.bundle('dist/bundle.entry.js', 'dist/bundle.js', {
  minify: true
}).then(() => {
  console.log("Successfully bundled all dependencies");
});

function buildSystemEntry() {
  var output = '';

  config.corePackages.forEach(item => {
    emitLine('require("' + item  + '");');
  });

  config.materialPackages.forEach(item => {
    emitLine('require("@angular2-material/' + item + '");');
  });

  if (!fs.existsSync(__dirname + '/../../dist')) {
    fs.mkdir(__dirname + '/../../dist');
  }
  
  fs.writeFileSync(__dirname + '/../../dist/bundle.entry.js', output);

  function emitLine(line) {
    output += line + '\n';
  }
}