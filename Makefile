public/wasm/test.wasm: test.c
	 emcc test.c -O3 -s WASM=1 -o public/wasm/test.wasm
