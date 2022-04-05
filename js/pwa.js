if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("Service Worker trouver"))
      .catch((err) => console.warn("Problem in la casa de papel", err));
  });
}
