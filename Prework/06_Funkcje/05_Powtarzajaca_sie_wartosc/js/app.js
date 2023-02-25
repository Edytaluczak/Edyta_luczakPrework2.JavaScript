function indexOfRepeatedValue(array) {
    let firstIndex = -1;
    for (let i = 0; i <= array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                firstIndex = i;
                break
            }
        }
        if (firstIndex !== -1) {
            break;
        }
    }
    return firstIndex;
}

const firstIndex = indexOfRepeatedValue(numbers);
console.log(firstIndex);