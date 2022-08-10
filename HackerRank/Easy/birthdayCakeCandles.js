/**
 * 
 * You are in charge of the cake for a child's birthday. 
 * You have decided the cake will have one candle for each 
 * year of their total age. They will only be able to blow out 
 * the tallest of the candles. Count how many candles are tallest.
 * 
 */

const list = [1000, 1000, 1000, 1000];


function birthdayCakeCandles(candles) {
    // Write your code here
    let dicc = {}

    for (let i = 0; i < candles.length; i++) {
        const e = candles[i];
        if (!dicc[e]) {
            dicc[e] = 1
        } else {
            dicc[e] += 1
        }
    }

    const biggestCandle = Object.keys(dicc).reduce((a, b) => a > b ? a : b)

    console.log(dicc[biggestCandle])


}




birthdayCakeCandles(list)