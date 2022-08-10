/**
 * 
 * Given five positive integers, find the minimum and maximum values 
 * that can be calculated by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum values as a single 
 * line of two space-separated long integers.
 */

function miniMaxSum(arr) {
    // Write your code here
    let sums = []
    for (let i = 0; i < 5; i++) {
        sums.push(
            arr.slice(0, i).concat(arr.slice(i + 1, arr.length)).reduce((a, b) => a + b)
        )
    }

    console.log(sums.reduce((a, b) => a < b ? a : b), sums.reduce((a, b) => a < b ? b : a))
}

miniMaxSum([3, 4, 1, 7, 8])