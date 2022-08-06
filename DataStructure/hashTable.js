let hash = {};
let array = [1, 2, 3, 1, 2, 6, 4, 2, 3, 41]

console.log(hash)



for (let i = 0; i < array.length; i++) {
    const e = array[i];
    if (!hash[e]) {
        hash[e] = 1
    } else {
        hash[e] += 1
    }
}

console.log(hash)