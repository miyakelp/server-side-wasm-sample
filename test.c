#include <emscripten/emscripten.h>

double EMSCRIPTEN_KEEPALIVE bake_pi(void) {
  double res = 0;
  for (int i = 0; i < 2000000000; i++) {
    if (i % 2) {
      res -= (1.0 / (i * 2 + 1));
    } else {
      res += (1.0 / (i * 2 + 1));
    }
  }

  return res * 4;
}

