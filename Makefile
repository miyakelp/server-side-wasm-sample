wasm:
	 emcc test.c -O3 -s WASM=1 -s -o test.wasm
