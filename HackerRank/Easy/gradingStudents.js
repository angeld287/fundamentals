function gradingStudents(grades) {
    // Write your code here

    return grades.map(_ => {
        if (_ === 100) return _

        const ld = parseInt(_.toString()[1])
        const incr = ld > 5 ? 10 - ld : 5 - ld
        return ((_ + incr) - _) < 3 ? (
            (_ + incr) < 40 ? _ : (_ + incr)
        ) : _
    });
}

console.log(gradingStudents([73, 67, 38, 33]).join('\n'))