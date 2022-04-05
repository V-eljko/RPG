// Création du services worker
// Ethan
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("Service Worker trouver"))
      .catch((err) => console.warn("Problem in la casa de papel", err));
  });
}
// Création du joueur de musique
// Ethan
const musicPlayer = document.getElementById("playpause");
const audio = document.getElementById("audio");
audio.volume = 0.2;
function playMusic() {
  musicPlayer.classList.remove("pause");
  musicPlayer.classList.add("play");
  audio.play();
}
function pauseMusic() {
  musicPlayer.classList.remove("play");
  musicPlayer.classList.add("pause");
  audio.pause();
}
window.onload = playMusic();
musicPlayer.addEventListener("click", () => {
  const isPlaying = musicPlayer.classList.contains("play");
  if (isPlaying) {
    pauseMusic();
  } else playMusic();
});
document.onvisibilitychange = function () {
  if (document.visibilityState === "hidden") {
    pauseMusic();
  } else playMusic();
};
