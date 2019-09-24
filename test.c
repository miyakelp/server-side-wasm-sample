#include <emscripten/emscripten.h>

int EMSCRIPTEN_KEEPALIVE very_heavy_calculation(int n) {
  return n * n;
}

