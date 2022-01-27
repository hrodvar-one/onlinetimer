// Функция копирования значения нажатой кнопки в
// указанное поле ввода

function copyValueTo(fromElem, toElemId) {
    let elem = document.getElementById(toElemId);
    elem.value = fromElem.value;
}


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
    if (hoursInSeconds == 0 && minutesInSeconds == 0 && seconds == 0) {
        clearInterval(stopTimer);
        // Функция задержки вывода сообщения об окончании времени
        function exitMessage() {
            alert('Время вышло');
        }
        setTimeout(exitMessage, 1000);
    }
}

// Ввожу любую переменную и использую её для остановки setInterval
let stopTimer = 1;

function startTimer () {
    stopTimer = setInterval(function () { inputTimeInSeconds(); }, 1000);
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
    clearInterval(stopTimer);
}