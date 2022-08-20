function powerCrisis(lines) {
    lines.forEach(_ => {
        const N = parseInt(_);
        let m = 1;

        while (!check(m, N)) {
            m += 1
        }
        console.log(m)
    });
}

function check(m, N) {
    let list = []
    for (let i = 0; i < N; i++) {
        list.push(i);
    }

    let c = 0;

    while (list[c] !== 13) {
        //console.log(c);
        list = list.filter(_ => _ !== list[0] + c);
        console.log(list);
        c += (m - 1);
        if (c >= list.length) {
            c = c % list.length;
        }
    }

    return list.length === 1;
}

const lines = `17`;

powerCrisis(lines.split("\n"))