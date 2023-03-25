const { symbols: lib } = Deno.dlopen("./a.out", {
  sum: { parameters: ["i32", "i32"], result: "i32" },
  sleep_forever: { parameters: [], result: "void", nonblocking: true },
});

console.log(lib.sum(1, 1));

lib.sleep_forever(); // Try commenting out this line and see how the following error is thrown

throw 1; // Not thrown if the above line exists
