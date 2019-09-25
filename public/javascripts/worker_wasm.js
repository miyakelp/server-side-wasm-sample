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

var mod = {};
fetch('/wasm/test.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, {env: env})
).then(obj => {
  mod = obj.instance;
  self.postMessage(1);
});


onmessage = function(e) {
  console.log('Start wasm worker.');
  console.log(mod.exports._bake_pi());
}
