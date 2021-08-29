/**
 * An array A consisting of N different integers is given. The array contains integers
 * in the range [1..(N + 1)], which means that exactly one element is missing.
 *
 * Your goal is to find that missing element.
 *
 * Write a function:
 *
 * function solution(A);
 *
 * that, given an array A, returns the value of the missing element.
 *
 * For example, given array A such that:
 *
 *   A[0] = 2
 *   A[1] = 3
 *   A[2] = 1
 *   A[3] = 5
 *
 * the function should return 4, as it is the missing element.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 *
 * Copyright 2009–2021 by Codility Limited. All Rights Reserved.
 * Unauthorized copying, publication or disclosure prohibited.
 */

const simple = [2, 3, 1, 5];
const empty = [];
const single = [1];
const firstMissing = [2, 3, 4, 5, 6, 7];
const lastMissing = [1, 2, 3, 4, 5, 6];
const double2 = [1, 1];
const double3 = [1, 1, 1];
const double4 = [1, 1, 1, 1];
const mediumTest = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23,
  24, 25, 26, 27, 28, 29, 30,
];

function solution(A) {
  A.sort((a, b) => a - b);
  if (A.length === 0) return 1;
  for (let i = 0; i < A.length; i++) {
    if (A[0] !== 1) return 1;
    if (A[i] === A[i + 1]) continue;
    else if (A[i] + 1 !== A[i + 1]) {
      return A[i] + 1;
    }
  }
}

console.log("4:", solution(simple));
console.log("1:", solution(empty));
console.log("2:", solution(single));
console.log("1:", solution(firstMissing));
console.log("7:", solution(lastMissing));
console.log("2:", solution(double2));
console.log("2:", solution(double3));
console.log("2:", solution(double4));
console.log("22:", solution(mediumTest));
