function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here


    let applesIn = []
    let orangesIn = []
    for (let i = 0; i < apples.length; i++) {
        const e = apples[i];

        if (e < 0) {

            let asd = s - a
            let v = Math.abs(e)
            console.log(asd, v);
            if (v >= asd) {
                applesIn.push(e)
            }
        }

    }

    for (let i = 0; i < oranges.length; i++) {
        const e = oranges[i];
        if (e > 0) {
            let tbd = b - t
            let v = Math.abs(e)
            if (v >= tbd) {
                orangesIn.push(e)
            }
        }

    }
    console.log(applesIn.length)
    console.log(orangesIn.length)

}

countApplesAndOranges(2, 3, 1, 5, [-2], [-1])