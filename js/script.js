// Функция копирования значения нажатой кнопки в
// указанное поле ввода

function copyValueTo(fromElem, toElemId) {
    let elem = document.getElementById(toElemId);
    elem.value = fromElem.value;
}



// function resetValue() {
//     let i = 0;
//     while (i<1) {
//         let elem = document.getElementById("txHours");
//         elem.value = "00";
//         let elemTwo = document.getElementById("txMinutes");
//         elemTwo.value = "00";
//         let elemThree = document.getElementById("txSeconds");
//         elemThree.value = "00";
//         i++;
//     }
// }

// function setupValue() {
//     let elem = document.getElementById("txHoursTwo");
//     let elemTwo = document.getElementById("txMinutesTwo");
//     let elemThree = document.getElementById("txSecondsTwo");
//
//     if (elem.value == "00" && elemTwo.value == "00" && elemThree.value == "00") {
//         alert('Время вышло');
// }

// // Запускает сброс цифровых счётчиков времени после 0.5 секунд
// setTimeout(function() { resetValue(); }, 500);

// Функция перевода времени в секунды

// function inputTimeInSeconds() {
//     let hoursInSeconds = txHours.value * 3600;
//     let minutesInSeconds = txMinutes.value * 60;
//     let seconds = txSeconds.value * 1;
//     // alert(hoursInSeconds);
//     // alert(minutesInSeconds);
//     // alert(seconds);
//     let summTimeInSeconds = hoursInSeconds + minutesInSeconds + seconds;
//     // alert(summTimeInSeconds);
//     return summTimeInSeconds;
// }

// function timer() {
//     while (inputTimeInSeconds() != 0) {
//         txHours = Math.trunc(inputTimeInSeconds() / 3600);
//         txMinutes = Math.trunc((inputTimeInSeconds() / 60) - (txHours * 60));
//         alert(txMinutes);
//         alert(txHours);
//         let test = inputTimeInSeconds() - 1;
//         // alert(test);
//         // txHours = test / 3600;
//     }
// }

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
    // if (hoursInSeconds == 0 && minutesInSeconds == 0 && seconds == -1) {
    //     return alert('Время вышло');
    // }
}

// function startTimer () {
//     document.getElementById("start-button").value = "Пауза";
//     setInterval(function () { inputTimeInSeconds(); }, 1000);
// }

// Ввожу любую переменную и использую её для остановки setInterval
let stopTimer = 1;

function startTimer () {
    stopTimer = setInterval(function () { inputTimeInSeconds(); }, 1000);
    // setInterval(function () { inputTimeInSeconds(); }, 1000);
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