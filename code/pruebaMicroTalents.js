
function espesificarNumeroMultiplorde5Y3(arr) {
    let result = ""

    for (let i = 1; i < arr.length; i++) {
        const e = arr[i];

        if (e === 0) continue;

        if (result === "") {
            result = e.toString();
            continue;
        }

        if (e % 3 === 0 && e % 5 !== 0) {
            result = result + ", M - 3";
            continue;
        }


        if (e % 5 === 0 && e % 3 !== 0) {
            result = result + ", M - 5";
            continue
        }

        if (e % 5 === 0 && e % 3 === 0) {
            result = result + ", M - 3 - 5";
            continue
        }

        result = result + ", " + e

    }

    return result
}

const arr = Array.from(Array(100).keys())
console.log(espesificarNumeroMultiplorde5Y3(arr))


//1, 2, M - 3, 4, M - 5, M - 3, 7, 8, M - 3, M - 5, 11, M - 3, 13, 14, M - 3 - 5,......

