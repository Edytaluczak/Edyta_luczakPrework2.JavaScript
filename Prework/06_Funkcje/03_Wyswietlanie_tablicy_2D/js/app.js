
const users = [["Jaydn Humphries", "Ayda Orozco"], ["Sanjeev Wilkinson", "Jorge Markham"]];

/**
 * Write your code below!
 */

function print2DArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i];
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}
console.log("Użytkownicy:");
print2DArray(users);


/**
 * Do NOT modify code below!
 */
module.exports = typeof print2DArray === "undefined" ? null : print2DArray;