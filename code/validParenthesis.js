
function validParenthesis(parents) {
    if (parents === "") return true;

    const replaced = parents.replace(/\(\)/ig, '')

    if (replaced === parents) return false;

    return validParenthesis(replaced);
}


console.log(validParenthesis('(()()())(()()()())'))