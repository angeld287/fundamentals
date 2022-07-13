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

//selecction Sort
function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        //set current index as minimum
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                //update minimum if current is lower that what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

console.log('selecction Sort: ', selectionSort([3, 4, 1, 7, 8, 2, 9]))

