function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    if (x1 < x2) {
        if (v1 <= v2) {
            return "NO"
        }
        while (x1 < x2) {
            x1 = x1 + v1
            x2 = x2 + v2
            if (x1 === x2) {
                return "YES"
            }
        }
    } else {
        if (v2 <= v2) {
            return "NO"
        }
        while (x1 > x2) {
            x1 = x1 + v1
            x2 = x2 + v2
            if (x1 === x2) {
                return "YES"
            }
        }
    }

    return "NO"
}

console.log(kangaroo(0, 2, 5, 3))