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

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i - 1]) {
                //find where number should go
                for (var j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }
    }

    return array
}

console.log('Insertion Sort: ', insertionSort([3, 4, 1, 7, 8, 2, 9]))


function partition(arr, start, end) {
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
};

console.log('QuickSort: ', partition([3, 4, 1, 7, 8, 2, 9], 0, 7))

//Hay que arreglar el Pivot

console.log("<a rel='do' href='https://google.com'>".match(/rel=("|')/))