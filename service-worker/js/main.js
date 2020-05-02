if ("serviceWorker" in navigator) {
  console.log("sw supported");

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw_cached_site.js")
      .then((res) => {
        console.log("SW registered");
      })
      .catch((err) => {
        console.log(`SW error: ${err}`);
      });
  });
}
