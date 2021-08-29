/**
 * A non-empty array A consisting of N integers is given.
 * The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).
 *
 * For example, array A such that:
 *
 *   A[0] = -3
 *   A[1] = 1
 *   A[2] = 2
 *   A[3] = -2
 *   A[4] = 5
 *   A[5] = 6
 *
 * contains the following example triplets:
 *
 * (0, 1, 2), product is −3 * 1 * 2 = −6
 * (1, 2, 4), product is 1 * 2 * 5 = 10
 * (2, 4, 5), product is 2 * 5 * 6 = 60
 *
 * Your goal is to find the maximal product of any triplet.
 *
 * Write a function:
 *
 * function solution(A);
 *
 * that, given a non-empty array A, returns the value of the maximal product of any triplet.
 *
 * For example, given array A such that:
 *
 *   A[0] = -3
 *   A[1] = 1
 *   A[2] = 2
 *   A[3] = -2
 *   A[4] = 5
 *   A[5] = 6
 *
 * the function should return 60, as the product of triplet (2, 4, 5) is maximal.
 *
 *
 *   A[0] = -5
 *   A[1] = 5
 *   A[2] = -5
 *   A[3] = 4
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [3..100,000];
 * each element of array A is an integer within the range [−1,000..1,000].
 *
 * Copyright 2009–2021 by Codility Limited. All Rights Reserved.
 * Unauthorized copying, publication or disclosure prohibited.
 */

const A1 = [-3, 1, 2, -2, 5, 6];
const A2 = [-5, 5, -5, 4];
const A3 = [-10, -2, -4];
const A4 = [-2, -3, -5, -6, 0];

function solution(A) {
  A.sort((a, b) => a - b);

  const n = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  const m = A[0] * A[1] * A[A.length - 1];

  return Math.max(n, m);
}

console.log(60, solution(A1));
console.log(125, solution(A2));
console.log(-80, solution(A3));
console.log(0, solution(A4));
