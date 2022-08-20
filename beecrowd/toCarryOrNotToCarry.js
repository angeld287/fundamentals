function toCarryOrNotToCarry(inputs) {
    const result = []

    inputs.forEach(e => {
        result.push(e.split(' ')[0] ^ e.split(' ')[1])
    });

    return result
}

const input = `4 6
6 9`;

console.log(toCarryOrNotToCarry(input.split('\n')))

