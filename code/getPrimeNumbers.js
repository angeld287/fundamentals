let number = 63;

let primeNumbers = []

for (let i = 0; i < number; i++) {
    if (number % i !== 0) {
        continue
    }
    console.log(number, i, number % i)
    primeNumbers.push(number)
}

console.log(primeNumbers);