function getBiggest(numbers) {
    return numbers.reduce((a, b) => a > b ? a : b)
}

console.log(getBiggest([3, 2, 5, 2, 3, 5, 3, 5, 7]))