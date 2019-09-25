var mod = {};
fetch('/wasm/test.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, {})
).then(obj => {
  mod = obj.instance;
  self.postMessage(0);
});


onmessage = function(e) {
  console.log('Start wasm worker.');
  var startTime = performance.now();
  var res = mod.exports._bake_pi();
  var endTime = performance.now();
  console.log(res);
  self.postMessage([res, endTime - startTime]);
}
