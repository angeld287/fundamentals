//wave('text') // [ 'Text', 'tExt', 'teXt', 'texT' ];
//wave() // [];
//wave('') // [];
//wave(1) // [];
//wave('tex1t') // [ 'Text', 'tExt', 'teXt', 'texT' ];


function wave(array) {
    if (!array || array === '' || !isNaN(array)) {
        return []
    }

    let result = []
    for (let i = 0; i < array.length; i++) {
        let e = array[i];
        let text = ""
        if (!isNaN(e)) {
            continue;
        }

        for (let j = 0; j < array.length; j++) {
            if (!isNaN(array[j])) {
                continue;
            }
            if (i === j) {
                text = text + e.toUpperCase();
            } else {
                text = text + array[j];
            }
        }
        result.push(text)
    }

    return result
}

function wave_v2(array) {
    if (!array || array === '' || !isNaN(array)) {
        return []
    }

    array = array.replace(/[0-9]/, '')

    let result = []
    for (let i = 0; i < array.length; i++) {
        let e = array[i];
        let text = array

        if (!isNaN(e)) {
            continue;
        }
        text = text.replace(e, e.toUpperCase())

        result.push(text)
    }

    return result
}

console.log(
    'hola'.split('').map((v, i) => ''.concat('hola'.substring(0, i).concat('hola'[i].toUpperCase()).concat('hola'.substring(i + 1))))
)

//console.log(wave_v2("tex1r"))
