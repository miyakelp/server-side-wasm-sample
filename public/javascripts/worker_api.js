importScripts('https://unpkg.com/axios/dist/axios.min.js');

onmessage = function(e) {
  console.log('Start api worker.');
  self.axios.get('/pi').then(function(res) {
    console.log(res);
  });
}
