function detectAdblock(callback) {
  fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
    method: "HEAD",
    mode: "no-cors"
  })
    .then((response) => {
      // If the request is redirected, then the ads are blocked.
      callback(response.redirected);
    })
    .catch(() => {
      // If the request fails completely, then the ads are blocked.
      callback(true);
    });
}

detectAdblock((isAdblockerDetected) => {
  // console.log(`ads are ${isAdblockerDetected ? "blocked" : "not blocked"}`);

  if (isAdblockerDetected) {
    let adp = document.createElement("div");
    adp.className = "adp";
    adp.innerHTML = `
        <h3>Ad Blocker Detected</h3>
        <p>This platform is not compatible with adblocker, please disable the Ad Blocker and refresh the application.</p>
        <a href="#">Dismiss</a>`;
    document.body.appendChild(adp);
    adp.querySelector("a").onclick = (e) => {
      e.preventDefault();
      // document.body.removeChild(adp_underlay);
      document.body.removeChild(adp);
    };
  }
});

/* async function detectAdBlock() {
  let adBlockEnabled = false;
  const googleAdUrl =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  try {
    await fetch(new Request(googleAdUrl)).catch((_) => (adBlockEnabled = true));
  } catch (e) {
    adBlockEnabled = true;
  } finally {
    if (adBlockEnabled) {
      // let adp_underlay = document.createElement("div");
      // adp_underlay.className = "adp-underlay";
      // document.body.appendChild(adp_underlay);
      let adp = document.createElement("div");
      adp.className = "adp";
      adp.innerHTML = `
        <h3>Ad Blocker Detected</h3>
        <p>This platform is not compatible with adblocker, please disable the Ad Blocker and refresh the application.</p>
        <a href="#">Dismiss</a>`;
      document.body.appendChild(adp);
      adp.querySelector("a").onclick = (e) => {
        e.preventDefault();
        // document.body.removeChild(adp_underlay);
        document.body.removeChild(adp);
      };
    }

    // console.log(`AdBlock Enabled: ${adBlockEnabled}`);
  }
}
await detectAdBlock(); */
