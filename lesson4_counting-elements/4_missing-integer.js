/**
 * This is a demo task.
 *
 * Write a function:
 *
 * function solution(A);
 *
 * that, given an array A of N integers, returns the smallest positive integer
 * (greater than 0) that does not occur in A.
 *
 * For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 *
 * Given A = [1, 2, 3], the function should return 4.
 *
 * Given A = [−1, −3], the function should return 1.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [1..100,000];
 * each element of array A is an integer within the range [−1,000,000..1,000,000].
 *
 * Copyright 2009–2021 by Codility Limited. All Rights Reserved.
 * Unauthorized copying, publication or disclosure prohibited.
 */

const A1 = [1, 3, 6, 4, 1, 2];
const A2 = [1, 2, 3];
const A3 = [-1, -3];
const A4 = [
  1, 3, 6, 4, 1, 2, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 19, 21,
  22, 23,
];
const A5 = [4, 5, 6, 2];

// tester
function arrRange(N, value) {
  let arr = Array.from({ length: N }, (_, i) => {
    return i + 1;
  });
  for (let i = 0; i < N; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

function solution(A) {
  let positiveSet = new Set(A.filter((v) => v >= 1));
  let arr = Array.from(positiveSet);
  arr.sort((a, b) => a - b);
  if (arr.length === 0) return 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return i + 1;
  }
  return arr.length + 1;
}

console.log(solution(A1));
console.log(solution(A2));
console.log(solution(A3));
console.log(solution(A4));
console.log(solution(A5));
console.log(solution(arrRange(200, 101)));
