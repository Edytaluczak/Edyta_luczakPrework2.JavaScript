const n = 3;
const calc = [];

/**
 * Write your code below!
 */

for (let row = 1; row <= n; row++) {

    let rowArr = [];
    for (let col = 1; col <= n; col++) {

        rowArr.push(`${row} x ${col} = ${row * col}`);
    }
    calc.push(rowArr);
}

for (let i = 0; i < calc.length; i++) {
    console.log(calc[i].join(" | "));
}