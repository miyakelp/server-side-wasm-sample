importScripts('https://unpkg.com/axios/dist/axios.min.js');

onmessage = function(e) {
  console.log('Start js worker.');
  var startTime = performance.now();
  var res = 0.0;
  for (var i = 0; i < 2000000000; i++) {
    if (i % 2 == 1) {
      res -= (1.0 / (i * 2 + 1));
    } else {
      res += (1.0 / (i * 2 + 1));
    }
  }

  res *= 4;
  var endTime = performance.now();
  console.log(res);
  self.postMessage([res, endTime - startTime]);
}
