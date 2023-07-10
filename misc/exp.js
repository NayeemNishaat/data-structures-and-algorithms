const arr = [1, 2, 3, 4];

(async () => {
  try {
    try {
      arr.forEach((el) => {
        console.log(el);

        if (el == 2) throw new Error("Faul");
      });
    } catch (error) {
      console.log(error);
      return;
    }
  } catch (err) {
    console.log(err, 78);
  }
})();
