function componentsInGraph(gb) {
    // Write your code here
    let max = 0, min = 0
    const n = gb.length;
    const sets = Array(2 * n)

    for (let i = 0; i < 2 * n; i++) {
        sets[i] = {
            count: 1,
            index: i
        }
    }

    gb.forEach(e => {
        console.log(e)

    })



    return [max, min]

}

componentsInGraph([[1, 6], [2, 7], [3, 8], [4, 9], [2, 6]])