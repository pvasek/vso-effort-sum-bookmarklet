var fs = require('fs');

var template = fs.readFileSync('./bookmarklet-template.html', { encoding: 'UTF8'});
var bookmarklet = fs.readFileSync('./bookmarklet.js', { encoding: 'UTF8'});
bookmarklet = bookmarklet.replace(/(\r\n|\n|\r)/gm, '');
var output = template.replace('{{bookmarklet-js}}', bookmarklet);
fs.writeFileSync('./bookmarklet.html', output)
