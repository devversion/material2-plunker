var fse = require('fs-extra');
var config = require('./config.json');

config.vendors.forEach(vendor => {
  fse.copySync(__dirname + '/../node_modules/' + vendor, __dirname + '/../dist/' + vendor);
});

console.log("Copied all vendors to the distribution folder.");

// Load the bundler.
require('./bundle/bundle');