
function getTotalX(a, b) {
    let output = []
    // track int
    for (let i = 1; i <= Math.max(...b); i++) {
        let mods = 0
        // track elems of a
        for (let j = 0; j < a.length; j++) {
            mods += i % a[j]
        }
        if (mods === 0) {
            // track elems of b
            for (let k = 0; k < b.length; k++) {
                mods += b[k] % i
            }
            if (mods === 0) {
                output.push(i)
            } else continue
        } else continue
    }
    return output.length

}

console.log(getTotalX([3, 4], [24, 48]))
console.log(getTotalX([2, 4], [16, 32, 96]))