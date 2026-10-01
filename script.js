/* ==========================================================================
   Soham Ghosh - Link-in-Bio JavaScript
   Simple & Lightweight Engine for Music Player & Smooth Interactions
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("music-play-btn");
  const audioPlayer = document.getElementById("audio-player");
  let isPlaying = false;

  if (playBtn && audioPlayer) {
    playBtn.addEventListener("click", () => {
      if (!isPlaying) {
        audioPlayer.play().then(() => {
          isPlaying = true;
          playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
          showToast("🎵 Playing audio track");
        }).catch(() => {
          showToast("⚠️ Audio stream unavailable");
        });
      } else {
        audioPlayer.pause();
        isPlaying = false;
        playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
      }
    });

    audioPlayer.addEventListener("ended", () => {
      isPlaying = false;
      playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    });
  }
});

// Toast notification helper
function showToast(message) {
  const existing = document.querySelector(".toast-msg");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
