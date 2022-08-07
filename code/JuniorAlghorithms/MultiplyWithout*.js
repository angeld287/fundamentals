const multiply = (a, b) => {

    if (isNaN(a) || isNaN(b)) return null;
    if (a < 0 || b < 0) return null;

    let result = 0;

    for (let i = 0; i < a; i++) {
        result = result + b
    }

    return result;
}

console.log(multiply(3, 4))