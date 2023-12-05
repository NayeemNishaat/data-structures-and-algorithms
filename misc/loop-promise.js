(async () => {
  async function ab(i) {
    if (i === 2) throw new Error("i is 3");

    // try {
    //   if (i === 2) throw new Error("i is 3");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  try {
    for (let i = 0; i < 5; i++) {
      // Important: If any error occurs inside the loop, the loop will break. So we should handle error inside the loop to keep it going in case of any potential error.
      try {
        await ab(i);
        console.log(i);
      } catch (error) {
        console.log(error);
      }

      // await ab(i);
      // console.log(i);
    }

    console.log("End");
  } catch (err) {
    console.log(err);
  }
})();
