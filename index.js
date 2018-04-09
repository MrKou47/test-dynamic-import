const babel = require('babel-core');
const path = require('path');

const filename = path.join(__dirname, './test/js/dynamic-import.js');

babel.transformFile(filename, { plugins: ["dynamic-import-node"] }, (err, result) => {
  // console.log(err, result);
  console.log(result.code);
});

require('http').createServer((req, res) => console.log(req.url)).listen(8888);