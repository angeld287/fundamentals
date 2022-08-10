/* 
    There is a large pile of socks that must be paired by color.
    Given an array of integers representing the color of each sock, 
    determine how many pairs of socks with matching colors there are. 

    Hay una gran pila de calcetines que deben emparejarse por color.
    Dada una matriz de números enteros que representan el color de cada calcetín,
    determinar cuántos pares de calcetines del mismo color hay.


    Example

    There is one pair of color  and one of color. 
    There are three odd socks left, one of each color. The number of pairs is .

    Function Description

    Complete the sockMerchant function in the editor below.
    sockMerchant has the following parameter(s):

    int n: the number of socks in the pile
    int ar[n]: the colors of each sock
    Returns

    int: the number of pairs
    Input Format

    The first line contains an integer , the number of socks represented in .
    The second line contains  space-separated integers, , the colors of the socks in the pile.
    
    https://www.hackerrank.com/challenges/sock-merchant/problem?h_r=internal-search
*/

function sockMerchant(n, ar) {
    // Write your code here
    const elements = {}
    const pairs = {}
    for (let i = 0; i < n; i++) {
        const e = ar[i];
        if (!elements[e]) {
            elements[e] = 1
        } else {
            elements[e] += 1
            pairs[e] = checkPair(elements[e]) / 2
        }
    }
    const results = Object.values(pairs);
    return results.length > 0 ? results.reduce((a, b) => a + b) : 0

}

function checkPair(n) {
    if (n % 2 === 0) {
        return n
    } else {
        return n - 1
    }
}

console.log(sockMerchant(3, [10, 20, 30]))