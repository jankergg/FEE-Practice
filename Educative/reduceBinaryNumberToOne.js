/**
 * TODO complete this function
 * @param {*} s
 * @returns
 */
var numSteps = function (s) {
    var dec = parseInt(s, 2);
    var step = 0;
    while (dec !== 1) {
        if (dec % 2 === 0) {
            dec /= 2;
        } else {
            dec += 1;
        }
        step++;
    }
    return step;
};
console.log(
    numSteps("1111011110000011100000110001011011110010111001010111110001") ===
        85
);
