const CALL_VIDEO_SRC = "assets/call-video.mp4";

const incomingCall = document.querySelector("#incoming-call");
const activeCall = document.querySelector("#active-call");
const callVideo = document.querySelector("#call-video");
const videoPlaceholder = document.querySelector("#video-placeholder");
const acceptCallButton = document.querySelector("#accept-call");
const declineCallButton = document.querySelector("#decline-call");
const endCallButton = document.querySelector("#end-call");
const callTimer = document.querySelector("#call-timer");
const statusTime = document.querySelector("#status-time");
const ringingText = document.querySelector("#ringing-text");

let timerInterval = null;
let ringingInterval = null;
let callStartedAt = 0;

function formatClock(date = new Date()) {
  return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function formatDuration(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateStatusTime() {
  statusTime.textContent = formatClock();
}

function startRinging() {
  let dots = 0;
  ringingInterval = setInterval(() => {
    dots = (dots + 1) % 4;
    ringingText.textContent = `chamando${".".repeat(dots || 3)}`;
  }, 650);
}

function stopRinging() {
  clearInterval(ringingInterval);
  ringingInterval = null;
}

function startCallTimer() {
  callStartedAt = Date.now();
  callTimer.textContent = "00:00";
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - callStartedAt) / 1000);
    callTimer.textContent = formatDuration(elapsed);
  }, 1000);
}

function stopCallTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function showVideoFallback() {
  callVideo.hidden = true;
  videoPlaceholder.hidden = false;
}

async function playCallVideo() {
  callVideo.src = CALL_VIDEO_SRC;
  callVideo.loop = true;
  callVideo.muted = false;
  callVideo.hidden = false;
  videoPlaceholder.hidden = true;

  try {
    await callVideo.play();
  } catch {
    showVideoFallback();
  }
}

async function acceptCall() {
  stopRinging();
  incomingCall.hidden = true;
  activeCall.hidden = false;
  document.body.classList.add("in-call");
  startCallTimer();
  await playCallVideo();
}

function endCall() {
  stopRinging();
  stopCallTimer();
  callVideo.pause();
  callVideo.removeAttribute("src");
  callVideo.load();
  document.body.classList.remove("in-call");
  activeCall.hidden = true;
  incomingCall.hidden = false;
  startRinging();
}

function declineCall() {
  stopRinging();
  incomingCall.classList.add("call-ended");
  ringingText.textContent = "chamada encerrada";
  acceptCallButton.disabled = true;
  declineCallButton.disabled = true;
}

document.querySelector("#confirm-age").addEventListener("click", () => {
  document.querySelector("#age-gate").remove();
  startRinging();
});

document.querySelector("#leave-page").addEventListener("click", () => location.replace("about:blank"));
acceptCallButton.addEventListener("click", acceptCall);
declineCallButton.addEventListener("click", declineCall);
endCallButton.addEventListener("click", endCall);

callVideo.addEventListener("error", showVideoFallback);

updateStatusTime();
setInterval(updateStatusTime, 15_000);
