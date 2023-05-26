const ax = [
  "abc(app)",
  "abc(vop)",
  "abc(kill)",
  "ashfnsnfnsfn999",
  "Cur(66s)",
  "Cur(kkl)"
];

const news = ax.filter((el, i) => {
  if (el.includes("(")) {
    const ind = ax.findIndex((eel) => {
      return eel.startsWith(el.slice(0, el.indexOf("(")));
    });

    if (ind !== i) return false;
    else return true;
  } else return true;
});
console.log(news);
