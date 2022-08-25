function divisibleSumPairs(n, k, ar) {
    const result = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; (j < n && i > j); j++) {
            const sum = ar[i] + ar[j];
            if (sum % k)
                result.push(sum)
        }
    }
    return result.length
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));