function dataFinder(data) {
    // Write your code here
    return function find(minRange, maxRange, value) {
        if (maxRange > data.length - 1 || data.length === 0 || maxRange < minRange) {
            throw new Error('Invalid Range')
        }
        for (let i = minRange; i <= maxRange; i++) {
            if (data[i] === value) {
                return true
            }

        }

        return false

    }
}

console.log(dataFinder([15, 1, 10, 5, 4, 20])(1, 4, 4))