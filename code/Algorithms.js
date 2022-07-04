//Recursive

let sumcount = 0, sum = 0;

function aVeryBigSum(ar) {
    if (sumcount > ar.length) {
        return sum
    }

    if (ar[sumcount] != undefined)
        sum = sum + ar[sumcount];
    sumcount++
    return aVeryBigSum(ar);
}

console.log('recursive: ', aVeryBigSum([3, 4, 1, 7, 8, 9]))


//Bubble Sort 
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                //Swap the numbers
                let temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

