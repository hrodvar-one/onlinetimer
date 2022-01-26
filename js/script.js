// Функция копирования значения нажатой кнопки в
// указанное поле ввода

function copyValueTo(fromElem, toElemId) {
    let elem = document.getElementById(toElemId);
    elem.value = fromElem.value;
}

// Функция сброса значений цифрового счётчика до значения 00

function resetValue() {
    let i = 0;
    while (i<1) {
        let elem = document.getElementById("txHours");
        elem.value = "00";
        let elemTwo = document.getElementById("txMinutes");
        elemTwo.value = "00";
        let elemThree = document.getElementById("txSeconds");
        elemThree.value = "00";
        i++;
    }
}

// function setupValue() {
//     let elem = document.getElementById("txHoursTwo");
//     let elemTwo = document.getElementById("txMinutesTwo");
//     let elemThree = document.getElementById("txSecondsTwo");
//
//     if (elem.value == "00" && elemTwo.value == "00" && elemThree.value == "00") {
//         alert('Время вышло');
// }

function inputTimeInSeconds() {
    let hoursInSeconds = txHours.value * 3600;
    let minutsInSeconds = txMinutes.value * 60;
    let seconds = txSeconds.value;
    alert(hoursInSeconds);
    alert(minutsInSeconds);
    alert(seconds);
}

