var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');

const env = {
  memoryBase: 0,
  tableBase: 0,
  memory: new WebAssembly.Memory({
    initial: 256
  }),
  table: new WebAssembly.Table({
    initial: 0,
    element: 'anyfunc'
  })
}

var bytes = new Uint8Array(fs.readFileSync('./public/wasm/test.wasm'));
var mod = new WebAssembly.Instance(new WebAssembly.Module(bytes), {env: env});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/pi', function(req, res, next) {
  res.render('index', { title: mod.exports._very_heavy_calculation(10) });
});

module.exports = router;
