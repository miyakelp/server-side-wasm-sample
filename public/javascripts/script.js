const wasmWorker = new Worker('/javascripts/worker_wasm.js');
wasmWorker.addEventListener('message', (message) => {
  wasmWorker.postMessage('');
});
const apiWorker = new Worker('/javascripts/worker_api.js');
apiWorker.postMessage('');

console.log(window);
