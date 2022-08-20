
/**
 * 
 * The input contains several test cases. The first line of 
 * a test case contains one integer K indicating the number of 
 * queries that will be made (0 < K ≤ 103). The second line of 
 * a test case contains two integers N and M representing the 
 * coordinates of the division point (-104 < N, M < 104). 
 * Each of the K following lines contains two integers X and Y 
 * representing the coordinates of a residence (-104 ≤ X, Y ≤ 104).
 * 
 *  the word divisa (means border in Portuguese) if the residence is on one of the border lines (North-South or East-West);
 *  NO (means NW in Portuguese) if the residence is in Northwestern Nlogonia;
 *  NE if the residence is in Northeastern Nlogonia;
 *  SE if the residence is in Southeastern Nlogonia;
 *  SO (means SW in Portuguese) if the residence is in Southwestern Nlogonia.
 */

function divisionOfNlogonia(input) {
    var lines = input.split('\n');
    const result = []

    let x, y;

    const firstLine = lines[0]; //one integer K that indicate the number of quieries.
    const secondLine = lines[1].split(" "); //two integer N, M - Coordinates of division point
    const othersLines = lines.filter((_, i) => i > 1).map((line) => line.split(" "))

    for (let i = 0; i < firstLine; i++) {
        const e = othersLines[i];
        const x = parseInt(secondLine[0])
        const y = parseInt(secondLine[1])

        const N_S = (y < parseInt(e[1])) ? "N" : "S"
        let R = (x < parseInt(e[0])) ? N_S + "E" : N_S + "O"

        if (x === parseInt(e[0]) || y === parseInt(e[1])) {
            R = "divisa"
        }
        result.push(R)
    }

}

const input = `3
2 1
10 10
-10 1
0 33
4
-1000 -1000
-1000 -1000
0 0
-2000 -10000
-999 -1001
0`;

console.log(divisionOfNlogonia(input))