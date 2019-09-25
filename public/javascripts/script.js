const wasmWorker = new Worker('/javascripts/worker_wasm.js');
wasmWorker.addEventListener('message', (message) => {
  if (message.data == 0) {
    wasmWorker.postMessage('');
  } else {
    document.getElementById('wasm').innerHTML = message.data[0] + '  /  ' + message.data[1] + '[ms]';
  }
});
const apiWorker = new Worker('/javascripts/worker_api.js');
apiWorker.addEventListener('message', (message) => {
  document.getElementById('api').innerHTML = message.data[0] + '  /  ' + message.data[1] + '[ms]';
});
apiWorker.postMessage('');
const jsWorker = new Worker('/javascripts/worker_js.js');
jsWorker.addEventListener('message', (message) => {
  document.getElementById('js').innerHTML = message.data[0] + '  /  ' + message.data[1] + '[ms]';
});
jsWorker.postMessage('');

