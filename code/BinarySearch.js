const arr = [2, 3, 5, 7, 9, 13, 17, 31, 43, 59, 61, 67, 97];
const binarySearch = (arr, x, start = 0, end = arr.length) => {
    // If the item does not exist, return -1
    if (end < start) return -1;

    // Calculate middle index of the array
    let mid = Math.floor((start + end) / 2);
    let mid_1 = Math.round(arr[0] + (arr[arr.length - 1] - arr[0]) / 2)

    console.log(mid_1);
    // Is the middle a match?
    if (arr[mid] === x) return mid;
    // Is the middle less than x
    if (arr[mid] < x) return binarySearch(arr, x, mid + 1, end);
    // Else the middle is more than x
    else return binarySearch(arr, x, start, mid - 1);
}

console.log(binarySearch(arr, 7))