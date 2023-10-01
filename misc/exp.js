async function c() {
  // throw new Error("Err");
}

async function b() {
  await c();
}

async function a() {
  try {
    await b();

    await x(async () => {
      try {
        throw new Error("XXX");
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(22, error);
  }
}
a();

async function x(fn) {
  await fn();
}

// console.dir(
//   { as: 12, bb: 78, asd: { yy: { u: { gh: { tt: 89 } } } } },
//   { depth: null }
// );
