// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개 => 16
// 킹, 퀸, 룩, 비숍, 나이트, 폰
// 0보다 크거나 같고 10보다 작거나 같은 정수
// 0 1 2 2 2 7  -> 1 0 0 0 0 1
// 2 1 2 1 2 1 -> -1 0 0 1 0 7

// const x1 = '0 1 2 2 2 7';
// const x2 = '2 1 2 1 2 1';

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// console.log(input);

// function solution(x) {
//     console.log(x);
//     const arr = x.split(" ");
//     const input = [];
//     for (value of arr) {
//         input.push(parseInt(value));
//     }

//     const chess = [1, 1, 2, 2, 2, 8]
//     const result = [];
//     for (let i = 0; i < chess.length; i++) {
//         result[i] = chess[i] - input[i]
//     }
//     console.log(result.join(" "));
// }

// Node.js program to demonstrate the 
// fs.readFileSync() method

// Include fs module
const fs = require('fs');

// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./input.txt',
    { encoding: 'utf8', flag: 'r' });

// Display the file data
console.log(data);