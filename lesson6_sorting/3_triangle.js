/**
 * An array A consisting of N integers is given.
 * A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
 *
 * A[P] + A[Q] > A[R],
 * A[Q] + A[R] > A[P],
 * A[R] + A[P] > A[Q].
 *
 * For example, consider array A such that:
 *
 *   A[0] = 10    A[1] = 2    A[2] = 5
 *   A[3] = 1     A[4] = 8    A[5] = 20
 *
 * Triplet (0, 2, 4) is triangular.
 *
 * Write a function:
 *
 * function solution(A);
 *
 * that, given an array A consisting of N integers,
 * returns 1 if there exists a triangular triplet for this array and
 * returns 0 otherwise.
 *
 * For example, given array A such that:
 *
 *   A[0] = 10    A[1] = 2    A[2] = 5
 *   A[3] = 1     A[4] = 8    A[5] = 20
 *
 * the function should return 1, as explained above. Given array A such that:
 *
 *   A[0] = 10    A[1] = 50    A[2] = 5
 *   A[3] = 1
 *
 * the function should return 0.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [0..100,000];
 * each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 *
 * Copyright 2009–2021 by Codility Limited. All Rights Reserved.
 * Unauthorized copying, publication or disclosure prohibited.
 */

const A1 = [10, 2, 5, 1, 8, 20];
const A2 = [10, 50, 5, 1];
const A3 = [5, 3, 3];

/**
 * Find the middle index, check if the next index has the same value
 * else compare A[midx - 1] + A[midx] > A[midx + 1]
 */
function solution1(A) {
  if (3 > A.length) return 0;
  A.sort((a, b) => a - b);
  let mid = A[Math.round((A.length - 1) / 2)];
  let midx = A.indexOf(mid);
  if (A[midx] === A[midx + 1] && A[midx] + A[midx + 1] > A[midx + 2]) {
    return 1;
  }
  if (A[midx - 1] + A[midx] > A[midx + 1]) return 1;
  else return 0;
}

/**
 * Find the first index, (i) and check if A[i] + A[i+1] > A[i+2]
 * since A is in the ascending order and both
 * A[i+1] + A[i+2] > A[i] and A[i+2] + A[i] > A[i+1]
 * will be always true
 */
function solution2(A) {
  if (3 > A.length) return 0;
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) return 1;
  }
  return 0;
}

console.log(solution1(A1));
console.log(solution1(A2));
console.log(solution1(A3));
