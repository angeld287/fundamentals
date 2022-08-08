
function validParenthesis(parents) {
    if (parents === "") return true;

    const replaced = parents.replace(/\(\)/ig, '')

    if (replaced === parents) return false;

    return validParenthesis(replaced);
}

function valid(parents) {
    if (parents === "") return true;

    const replaced = parents.replace(/\(\)|\{\}|\[\]/ig, '')

    if (replaced === parents) return false;

    return valid(replaced);
}


console.log(valid('(){()()()({())}[])()}[({}()[])]'))