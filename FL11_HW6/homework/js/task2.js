let firstCatheti = +prompt("Please, enter first catheti", "");
let secondCatheti = +prompt("Please, enter second catheti", "");
let hypotenuse = +prompt("Please, enter hypotenuse", "");

if (firstCatheti + secondCatheti > hypotenuse &&
    firstCatheti + hypotenuse > secondCatheti && secondCatheti + hypotenuse > firstCatheti) {

    if (firstCatheti === secondCatheti && secondCatheti === hypotenuse && hypotenuse === firstCatheti) {
        console.log('Eequivalent triangle');
    } else if (firstCatheti === secondCatheti || firstCatheti === hypotenuse || secondCatheti === hypotenuse) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}

