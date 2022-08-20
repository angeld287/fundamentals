function flaviousJosephus(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        const e = inputs[i].split(" ");

        if (e.length === 1) {
            continue;
        }

        let camrades = []
        const distance = parseInt(e[1])
        let step = 0;

        for (let s = 1; s <= e[0]; s++) {
            camrades.push(s)
        }

        let stillCamratesAlive = camrades.length > distance
        let camrade = 1;

        while (stillCamratesAlive) {
            if (e[0] >= 6) break;
            step = (camrade) + distance
            camrades = camrades.filter(_ => _ !== step)
            camrade += 1
            console.log(camrades);
            stillCamratesAlive = (camrades.length > distance)
        }


        //console.log(camrades)
        //console.log('Case: ' + e + ': ' + e)

        /**
         * if (!camrades.find(_ => _ === camrade)) {
                camrade += 1
                stillCamratesAlive = (camrades.length > 1)
                continue;
            }
         * step = (camrade) + distance
            console.log(camrades, camrade, step);
            camrades = camrades.filter(_ => _ !== step)
         */

    }
}


const NC = 10 //test cases
const n = 50 // quantity of people in the circle
const k = 2 // the size of steps between two man in the circile
const input = `3
5 2`
//6 3
//1234 233`;

console.log(flaviousJosephus(input.split('\n')))