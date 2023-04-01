const n = 3

let dp = new Array(n).fill(new Array(n).fill(0))
dp[0][1] = 1;
/*  Expexted
[
    [0][1][0]
    [0][0][0]
    [0][0][0]
]   but....
*/
console.log(dp)

//Create 2D Array in JS
//Solution1:
dp = Array.apply(null, Array(n)).map(e => new Array(n).fill(0))
dp[0][1] = 1;
console.log(dp)