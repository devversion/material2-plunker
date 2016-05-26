var config = require('./config.json');
var glob = require('glob');
var fs = require('fs');

var sourceMapRegex = /^\/\/#\s+(sourceMappingURL=).*(.map)$/gm;

glob(__dirname + '/../node_modules/@angular2-material/**/*.js', (err, files) => {
  files
    .map(file => {
      var content = fs.readFileSync(file).toString();
      var hadSourcemap = sourceMapRegex.test(content);
      // Replace the sourceMap definition with an empty string, to avoid errors with SystemJS.
      content = content.replace(sourceMapRegex, '');

      return {
        path: file,
        contents: content,
        hadSourcemap: hadSourcemap
      }
    })
    .forEach(entry => {
      if (entry.hadSourcemap) {
        console.log(`Strip: Removed Sourcemap from ${entry.path}`);
        fs.writeFileSync(entry.path, entry.contents);
      }
    });

  console.log("Strip: Successfully stripped all sourcemaps out.");
});
