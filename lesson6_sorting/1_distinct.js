/**
 * Write a function
 *
 * function solution(A);
 *
 * that, given an array A consisting of N integers,
 * returns the number of distinct values in array A.
 *
 * For example, given array A consisting of six elements such that:
 *
 *  A[0] = 2    A[1] = 1    A[2] = 1
 *  A[3] = 2    A[4] = 3    A[5] = 1
 *
 * the function should return 3, because there are 3 distinct values
 * appearing in array A, namely 1, 2 and 3.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [0..100,000];
 * each element of array A is an integer within the range [−1,000,000..1,000,000].
 *
 * Copyright 2009–2021 by Codility Limited. All Rights Reserved.
 * Unauthorized copying, publication or disclosure prohibited.
 */

const A = [2, 1, 1, 2, 3, 1];
const empty = [];
const single = [1];
const three = [1, 2, 3];

/**
 * Using Set: overall 100%
 */
function solution1(A) {
  let newSet = new Set(A);
  return newSet.size;
}

/**
 *  Without using Set: overall 88%
 */
function solution2(A) {
  let filtered = A.filter((v, i, arr) => {
    return arr.indexOf(v) === i;
  });
  return filtered.length;
}

console.log(solution2(A));
console.log(solution2(empty));
console.log(solution2(single));
console.log(solution2(three));
