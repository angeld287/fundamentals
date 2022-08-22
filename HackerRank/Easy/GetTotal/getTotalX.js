function getTotalX(a, b) {
    // Write your code here
    return [...(a.map(_ => (6 % _) === 0 ? _ : 0)), ...(b.map(_ => (_ % 12) === 0 ? _ : 0))].filter(_ => _ !== 0).length
}

console.log(getTotalX([3, 4], [24, 48]))
console.log(getTotalX([2, 4], [16, 32, 96]))


