/*
    Given an array of integers, calculate the ratios of its elements that are positive, 
    negative, and zero. Print the decimal value of each fraction on a new line with  
    places after the decimal.

    Note: This challenge introduces precision problems. 
    The test cases are scaled to six decimal places, 
    though answers with absolute error of up to  are acceptable.

    Function Description

    Complete the plusMinus function in the editor below.

    plusMinus has the following parameter(s):
        -int arr[n]: an array of integers

    Print
    Print the ratios of positive, negative and zero values in the array. 
    Each value should be printed on a separate line with  digits after the decimal. 
    The function should not return a value.

*/

function plusMinus(arr) {
    // Write your code here
    let dicct = {}
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        const e = arr[i]
        const key = (e > 0) ? '+' : (e < 0 ? '-' : '0');

        if (!dicct[key]) {
            dicct[key] = 1;
        } else {
            dicct[key] += 1;
        }
    }

    console.log(dicct['+'] ? parseFloat(dicct['+'] / n).toFixed(6) : '0.000000');
    console.log(dicct['-'] ? parseFloat(dicct['-'] / n).toFixed(6) : '0.000000');
    console.log(dicct['0'] ? parseFloat(dicct['0'] / n).toFixed(6) : '0.000000');
}

plusMinus([1, -2, -7, 9, 1, -8, -5])