// Звуковой элемент создаётся один раз, чтобы браузер мог разрешить его
// воспроизведение после пользовательского нажатия на кнопку «Запуск».
const audio = new Audio("./sounds/alarm.mp3");
audio.preload = "auto";

let timerId = null;
let flashTimerId = null;
let endTime = 0;
let remainingMilliseconds = 0;
let isRunning = false;
let originalTitle = document.title;

function copyValueTo(fromElem, toElemId) {
    document.getElementById(toElemId).value = fromElem.value;
}

function copyValueToMinutes(value) {
    document.getElementById("txMinutes").value = value;
}

function getEnteredMilliseconds() {
    const hours = Number(document.getElementById("txHours").value) || 0;
    const minutes = Number(document.getElementById("txMinutes").value) || 0;
    const seconds = Number(document.getElementById("txSeconds").value) || 0;
    return Math.max(0, (hours * 3600 + minutes * 60 + seconds) * 1000);
}

function showTime(milliseconds) {
    const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("txHours").value = hours;
    document.getElementById("txMinutes").value = minutes;
    document.getElementById("txSeconds").value = seconds;
}

// Отсчёт основан на абсолютном времени окончания. Даже если браузер замедлит
// setInterval в фоновой вкладке, после следующего вызова будет показано верное время.
function updateTimer() {
    remainingMilliseconds = Math.max(0, endTime - Date.now());
    showTime(remainingMilliseconds);

    if (remainingMilliseconds === 0) {
        finishTimer();
    }
}

function requestNotificationPermission() {
    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
    }
}

function unlockAudio() {
    audio.muted = true;
    const playPromise = audio.play();
    if (playPromise) {
        playPromise.then(() => {
            audio.pause();
            audio.currentTime = 0;
            audio.muted = false;
        }).catch(() => {
            audio.muted = false;
        });
    }
}

function startTimer() {
    remainingMilliseconds = getEnteredMilliseconds();
    if (remainingMilliseconds === 0) {
        alert("Введите время");
        return;
    }

    requestNotificationPermission();
    unlockAudio();
    stopAlarm();
    endTime = Date.now() + remainingMilliseconds;
    isRunning = true;
    clearInterval(timerId);
    timerId = setInterval(updateTimer, 250);
    updateButtons("running");
}

function pauseTimer() {
    if (!isRunning) return;
    remainingMilliseconds = Math.max(0, endTime - Date.now());
    isRunning = false;
    clearInterval(timerId);
    showTime(remainingMilliseconds);
    updateButtons("paused");
}

function resumeTimer() {
    if (remainingMilliseconds <= 0) return;
    endTime = Date.now() + remainingMilliseconds;
    isRunning = true;
    clearInterval(timerId);
    timerId = setInterval(updateTimer, 250);
    updateButtons("running");
}

function finishTimer() {
    clearInterval(timerId);
    isRunning = false;
    showTime(0);
    updateButtons("stopped");
    flashTimerId = setInterval(changeColor, 1000);

    if (document.getElementById("audio-button").value === "ON") {
        sound();
    }

    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Онлайн-таймер", {
            body: "Время вышло!",
            icon: "./img.png"
        });
    }

    document.title = "⏰ Время вышло!";
}

function resetValue() {
    clearInterval(timerId);
    isRunning = false;
    remainingMilliseconds = 0;
    showTime(0);
    stopAlarm();
    updateButtons("stopped");
}

function stopAlarm() {
    clearInterval(flashTimerId);
    document.body.classList.add("body");
    document.title = originalTitle;
    audio.pause();
    audio.currentTime = 0;
}

function resetTimer(value) {
    resetValue();
    copyValueToMinutes(value);
}

function sound() {
    audio.muted = false;
    audio.currentTime = 0;
    audio.play().catch(() => {
        // Если браузер всё же заблокировал звук, уведомление останется доступно.
    });
}

function onOffAudio() {
    const button = document.getElementById("audio-button");
    const enabled = button.value === "ON";
    button.classList.remove("audio-button-on", "audio-button-off");
    button.classList.add(enabled ? "audio-button-off" : "audio-button-on");
    button.value = enabled ? "OFF" : "ON";
}

function updateButtons(state) {
    document.getElementById("start-button").style.visibility = state === "stopped" ? "visible" : "hidden";
    document.getElementById("pause-button").style.visibility = state === "running" ? "visible" : "hidden";
    document.getElementById("resume-button").style.visibility = state === "paused" ? "visible" : "hidden";
}

function addClass() {
    document.body.classList.add("body");
}

function changeColor() {
    document.body.classList.remove("body");
    setTimeout(addClass, 500);
}
