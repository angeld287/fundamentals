/**
 * The problem is that it is clearly fairest to turn off the region of 
 * Wellington by last(after all, that is where the Electricity headquarters 
 * are), so for a given N, the `random' number m needs to be carefully 
 * chosen so that region 13 is the last region selected.
 * 
 * Write a program that will read in the number of regions and then 
 * determine the smallest number m that will ensure that Wellington 
 * (region 13) can function while the rest of the country is blacked out.
 * 
 * Input
 * 
 * Input will consist of a series of lines, each line containing the number 
 * of regions N (13 ≤ N ≤ 100 ). The file will be terminated by a 
 * line consisting of a single 0.
 * 
 * Output
 * 
 * Output will consist of a series of lines, one for each line of the 
 * input. Each line will consist of the number m according to the above scheme.
 *  
 * 
 * Escriba un programa que lea el número de regiones y luego determine el 
 * número m más pequeño que asegure que Wellington (región 13) pueda 
 * funcionar mientras el resto del país está bloqueado.
 * 
 * Entrada
 * La entrada consistirá en una serie de líneas, cada línea conteniendo 
 * el número de regiones N (13 ≤ N ≤ 100). El archivo terminará con una 
 * línea que consiste en un solo 0.
 * 
 * Salida
 * La salida constará de una serie de líneas, una para cada línea de la
 * entrada. Cada línea constará del número m según el esquema anterior.
 */


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