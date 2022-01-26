// function showMessage() {
//     alert( 'Всем привет!' );
// }

// Функция копирования значения нажатой кнопки в
// указанное поле ввода

function copyValueTo(fromElem, toElemId) {
    let elem = document.getElementById(toElemId);
    elem.value = fromElem.value;
}
//
// function resetValue(elemId) {
//     let elem = document.getElementById(elemId);
//     elem.value = "00";
// }

function resetValue() {
    let i = 0;
    while (i<1) {
        let elem = document.getElementById("txHours");
        elem.value = "00"
        let elemTwo = document.getElementById("txMinutes");
        elemTwo.value = "00"
        let elemThree = document.getElementById("txSeconds");
        elemThree.value = "00"
        i++;
    }
}