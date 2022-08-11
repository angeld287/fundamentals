function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here


    let applesD = apples.map(_ => (a + _))
    let orangeD = oranges.map(_ => (b + _))

    console.log(applesD.filter(_ => (_ >= s) && (_ <= t)).length)
    console.log(orangeD.filter(_ => (_ >= s) && (_ <= t)).length)

}

countApplesAndOranges(2, 3, 1, 5, [-2], [-1])