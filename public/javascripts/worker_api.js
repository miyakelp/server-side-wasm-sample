importScripts('https://unpkg.com/axios/dist/axios.min.js');

onmessage = function(e) {
  console.log('Start api worker.');
  var startTime = performance.now();
  self.axios.get('/pi').then(function(res) {
    var endTime = performance.now(); 
    console.log(res);
    self.postMessage([res.data.pi, endTime - startTime]);
  });
}
