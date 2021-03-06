// Инициализация переменной для того, чтобы звук
// воспроизводился даже если вкладка таймера не активна
let audio = new Audio();

// Функция копирования значения нажатой кнопки в
// указанное поле ввода
function copyValueTo(fromElem, toElemId) {
    let elem = document.getElementById(toElemId);
    elem.value = fromElem.value;
}

// Функция копирования значения нажатой кнопки в
// указанное поле ввода
function copyValueToMinutes(fromElem) {
    let elem = document.getElementById("txMinutes");
    elem.value = fromElem;
}

//  Ввожу любую переменную и использую её для остановки setInterval
let stopTimerTwo = 2;

// Основная функция расчета таймера обратного отсчета
function inputTimeInSeconds() {
    let hoursInSeconds = txHours.value * 3600;
    let minutesInSeconds = txMinutes.value * 60;
    let seconds = txSeconds.value * 1;
    // alert(hoursInSeconds);
    // alert(minutesInSeconds);
    // alert(seconds);
    let summTimeInSeconds = hoursInSeconds + minutesInSeconds + seconds;
    // alert(summTimeInSeconds);
    //вычитаю единицу из самого значения
    summTimeInSeconds--;
    // alert(summTimeInSeconds);
    hoursInSeconds = Math.trunc(summTimeInSeconds / 3600);
    minutesInSeconds = Math.trunc((summTimeInSeconds / 60) - (hoursInSeconds * 60));
    seconds = Math.trunc(summTimeInSeconds - (minutesInSeconds * 60) - (hoursInSeconds * 3600));
    // alert(hoursInSeconds);
    // alert(minutesInSeconds);
    // alert(seconds);
    document.getElementById("txHours").value = hoursInSeconds;
    document.getElementById("txMinutes").value = minutesInSeconds;
    document.getElementById("txSeconds").value = seconds;
    // Если значения в ячейках времени равны нулю,то есть таймер
    // дошёл до конца, то останавливаем таймер
    if (hoursInSeconds === 0 && minutesInSeconds === 0 && seconds === 0) {
        resetValue();
        // Запуск интервала функции смены фона
        stopTimerTwo = setInterval(changeColor, 1000);
        // clearInterval(stopTimer);
        if (document.getElementById("audio-button").value === 'ON') {
            sound()
        }
        // // Функция задержки вывода сообщения об окончании времени
        // function exitMessage() {
        //     sound();
        //     // alert('Время вышло');
        // }

        // setTimeout(exitMessage, 1000);
    }
}

// Ввожу любую переменную и использую её для остановки setInterval
let stopTimer = 1;

function startTimer () {
    let hoursInit = document.getElementById("txHours");
    let minutesInit = document.getElementById("txMinutes");
    let secondsInit = document.getElementById("txSeconds");

    //Проверка того что пользователь ввёл время перед запуском таймера
    if (hoursInit.value == 0 && minutesInit.value == 0 && secondsInit.value == 0) {
        alert('Введите время');
        return;
    }
    stopTimer = setInterval(function () { inputTimeInSeconds(); }, 1000);
    document.getElementById("start-button").style.visibility = 'hidden';
    document.getElementById("pause-button").style.visibility = 'visible';
}

// Функция сброса значений цифрового счётчика до значения 00
// и остановки таймера.

function resetValue() {
    let elem = document.getElementById("txHours");
    elem.value = "0";
    let elemTwo = document.getElementById("txMinutes");
    elemTwo.value = "0";
    let elemThree = document.getElementById("txSeconds");
    elemThree.value = "0";
    // Остановка основного таймера отсчёта времени
    clearInterval(stopTimer);
    // Остановка таймера моргания цвета фона
    clearInterval(stopTimerTwo);
    document.getElementById("start-button").style.visibility = 'visible';
    document.getElementById("pause-button").style.visibility = 'hidden';
    document.getElementById("resume-button").style.visibility = 'hidden';
    audio.pause();
    return 1;
}

// Функция выполняющаяся при нажатии на кнопку Пауза
function pauseTimer() {
    clearInterval(stopTimer);
    document.getElementById("resume-button").style.visibility = 'visible';
}

// Функция кнопки Продолжить
function resumeTimer() {
    stopTimer = setInterval(function () { inputTimeInSeconds(); }, 1000);
    document.getElementById("resume-button").style.visibility = 'hidden';
    document.getElementById("pause-button").style.visibility = 'visible';
}

// Функция установки времени быстро таймера с одновременным
// сбросом таймера
function resetTimer(fromElem) {
    resetValue();
    copyValueToMinutes(fromElem);
}

// Функция воспроизведения звука срабатывания таймера
function sound() {
    // let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = "./sounds/alarm.mp3"; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

//Функция включения(выключения) звука таймера
function onOffAudio() {
    if (document.getElementById("audio-button").value == 'ON') {
        let audioButton = document.getElementById("audio-button")
        audioButton.classList.remove('audio-button-on', 'audio-button-off');
        audioButton.classList.add('audio-button-off');
        document.getElementById("audio-button").value = 'OFF';
    } else if (document.getElementById("audio-button").value == 'OFF') {
        let audioButton = document.getElementById("audio-button")
        audioButton.classList.remove('audio-button-off', 'audio-button-on');
        audioButton.classList.add('audio-button-on');
        document.getElementById("audio-button").value = 'ON';
    }
}

// Функция добавления класса body
function addClass() {
    document.body.classList.add("body");
}

// Функция изменения фона body путём удаления и добавления
// соответствующего класса
function changeColor() {
    document.body.classList.remove("body");
    setTimeout(addClass, 500);
}


