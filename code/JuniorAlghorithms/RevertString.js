
function revert(text) {
    let result = ''
    for (let i = text.length - 1; i >= 0; i--) {
        const c = text[i];
        result += c
    }

    return result
}

console.log(revert('aangeles'))