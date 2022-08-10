/*

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


Function Description

Complete the timeConversion function in the editor below. 
It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 24 hour format


*/
function timeConversion(s) {
    // Write your code here
    let h = parseInt(s.slice(0, 2))

    if ((s.slice(-2)).toLowerCase() === 'pm') {
        return (h === 12 ? 12 : h + 12).toString() + s.slice(2, s.length - 2)
    } else {
        if (h === 12) {
            return "00" + s.slice(2, s.length - 2)
        }
        return s.slice(0, s.length - 2)
    }

}

console.log(timeConversion('12:45:54PM'))