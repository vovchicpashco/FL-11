let maxvalueRange;
let valueRange;
let userValue;
let prize;
let prizeUser;
let maxPrize;
let attempt;
const maxAttempt = 3;
const rangeStep = 4;
const defaultvalueRange = 8;
const defaultPrize = 100;
const maxPrizeMultiplayer = 2;
const dividerPrize = 2;

for (; ;) {
    maxvalueRange = defaultvalueRange;
    prizeUser = 0;
    maxPrize = defaultPrize;
    if (!confirm('Do you want to play a game?')) {
        alert('You did not become a billionaire, but can.');
        break;
    } else {
        do {
            prize = maxPrize;
            valueRange = Math.floor(Math.random() * (maxvalueRange + 1));

            for (attempt = maxAttempt; attempt >= 1; attempt--) {
                userValue = parseInt(prompt(
                    'Choose a roulette pocket number from 0 to ' + maxvalueRange + '\n Attempts left: '
                    + attempt + '\n Total prize: ' + prizeUser + '$' +
                    '\n Possible prize on current attempt: ' + prize + '$', 0));
                if (userValue === valueRange) {
                    break;
                } else {
                    if (attempt === 1) {
                        prize = 0;
                        prizeUser = 0;
                    } else {
                        prize /= dividerPrize;
                    }
                }
            }
            prizeUser += prize;
            if (prize > 0) {
                if (!confirm('Congratulation, you won! Your prize is: ' + prize + '$. Do you want to continue?')) {
                    break;
                }

            }
            maxPrize *= maxPrizeMultiplayer;
            maxvalueRange += rangeStep;
        } while (prize > 0);
        alert('Thank you for your participation. Your prize is: ' + prizeUser + '$');
    }
}