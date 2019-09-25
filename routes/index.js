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
  res.render('index');
});


router.get('/pi', function(req, res, next) {
  res.status(200).send('{"pi":' + mod.exports._bake_pi() + '}');
});

module.exports = router;
