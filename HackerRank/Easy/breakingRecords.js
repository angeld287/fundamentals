function breakingRecords(scores) {
    let highest = { points: scores[0], times: 0 };
    let lowest = { points: scores[0], times: 0 };
    scores.forEach(e => {
        highest = (highest.points < e) ? { points: e.points, times: highest.times + 1 } : highest;
        lowest = (lowest.points > e) ? { points: e.points, times: lowest.times + 1 } : lowest;
    });

    return [highest.times, lowest.times]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))