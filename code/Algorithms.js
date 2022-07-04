//Recursive
function aVeryBigSum(ar) {
    //Write your code here
    if (sumcount > ar.length) {
        return sum
    }

    if (ar[sumcount] != undefined)
        sum = sum + ar[sumcount];
    sumcount++
    return aVeryBigSum(ar);  // O(2^n) Exponential
}

aVeryBigSum([3, 4, 1, 7, 8, 9])