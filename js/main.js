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
// Préparation de l'écran de jeu
// Ethan
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.75;
canvas.height = window.innerHeight * 0.75;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
const mapImage = new Image();
mapImage.src = "src/de/l/image";
ctx.drawImage();
