(async () => {
  async function func() {
    throw new Error(223);
    // return 222;
  }

  p = [1, 2, 3].map(async (i) => {
    return [await func(), 2];
  });

  const ps = await Promise.allSettled(p); // Note: Check the status of the resolved promises to get info about them
  console.log(ps);
})();
