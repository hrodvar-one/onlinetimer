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

function timer() {
    let copyTxHours = txHours.value
    let hoursInRealTime = Math.trunc(inputTimeInSeconds() / 3600);
    // txHours = Math.trunc(inputTimeInSeconds() / 3600);
    let minutesInRealTime = Math.trunc((inputTimeInSeconds() / 60) - (copyTxHours * 60));
    // txMinutes = Math.trunc((inputTimeInSeconds() / 60) - (txHours * 60));
    let secondsInRealTime = Math.trunc(inputTimeInSeconds() - (minutesInRealTime * 60) - (hoursInRealTime * 3600));
    // alert(hoursInRealTime);
    // alert(minutesInRealTime);
    // alert(test);
    // txHours = test / 3600;
}

// let test = document.getElementById("txSeconds");

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
    if (hoursInSeconds == 0 && minutesInSeconds == 0 && seconds == 0) {
        return alert('Время вышло');
    }
}

function startTimer () {
    setInterval(function () { inputTimeInSeconds(); }, 1000);
}

// function startTimer () {
//     let hours = txHours.value;
//     let minutes = txMinutes.value;
//     let secondsTwo = txSeconds.value;
//     if (hours != 0 && minutes != 0 && secondsTwo !=0) {
//         setInterval(function () { inputTimeInSeconds()}, 1000);
//     } else {
//         return alert('Время вышло');
//     }
// }

// Функция сброса значений цифрового счётчика до значения 00

function resetValue() {
    let elem = document.getElementById("txHours");
    elem.value = "00";
    let elemTwo = document.getElementById("txMinutes");
    elemTwo.value = "00";
    let elemThree = document.getElementById("txSeconds");
    elemThree.value = "00";
}