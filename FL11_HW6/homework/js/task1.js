let a1 = +prompt('Please, enter abscissa of point A');
let a2 = +prompt('Please, enter ordinate of point A');
let b1 = +prompt('Please, enter abscissa of point B');
let b2 = +prompt('Please, enter ordinate of point B');
let c1 = +prompt('Please, enter abscissa of point C');
let c2 = +prompt('Please, enter ordinate of point C');
const divisor = 2;
let arithMeanOfX = (a1 + b1) / divisor;
let arithMeanOfY = (a2 + b2) / divisor;
console.log(c1 === arithMeanOfX && c2 === arithMeanOfY);