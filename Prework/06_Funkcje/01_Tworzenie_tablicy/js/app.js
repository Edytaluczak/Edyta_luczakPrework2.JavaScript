function createArray(rows) {
    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = i + 1;
    }
    return array;
}

let result = createArray(5);
console.log(result);