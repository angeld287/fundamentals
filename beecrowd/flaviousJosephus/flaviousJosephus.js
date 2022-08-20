function flaviousJosephus(inputs) {

    let scenarious = inputs.filter(_ => _.split(" ").length > 1)

    return scenarious.map((_, ind) => {
        let res = 0
        const n = parseInt(_.split(" ")[0])
        const k = parseInt(_.split(" ")[1])

        for (let i = 1; i <= n; i++) {
            res = ((res + k) % i)
        }
        console.log('Case ', ind + 1, ': ', res + 1)
    })
}


const NC = 10 //test cases
const n = 50 // quantity of people in the circle
const k = 2 // the size of steps between two man in the circile
const input = `3
5 2
6 3
1234 233`;

flaviousJosephus(input.split('\n'))