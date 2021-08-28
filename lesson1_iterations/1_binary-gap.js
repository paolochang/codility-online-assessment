/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros
 * that is surrounded by ones at both ends in the binary representation of N.
 *
 * For example:
 * - number 9 has binary representation 1001 and contains a binary gap of length 2.
 * - number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
 * - number 20 has binary representation 10100 and contains one binary gap of length 1.
 * - number 15 has binary representation 1111 and has no binary gaps.
 * - number 32 has binary representation 100000 and has no binary gaps.
 *
 * Write a function:
 *
 * function solution(N);
 *
 * that, given a positive integer N, returns the length of its longest binary gap.
 * The function should return 0 if N doesn't contain a binary gap.
 *
 * For example, given N = 1041 the function should return 5, because N has binary representation
 * 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should
 * return 0, because N has binary representation '100000' and thus no binary gaps.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [1..2,147,483,647].
 *
 * Copyright 2009–2021 by Codility Limited. All Rights Reserved.
 * Unauthorized copying, publication or disclosure prohibited.
 */

const N1 = 1041;
const N2 = 32;
const N3 = 1001;
const N4 = 529;
const N5 = 20;
const N6 = 15;
const N7 = 32;
const N8 = 561892;
const N9 = 74901729;
const N10 = 1376796946;

function solution(N) {
  let binary = (N >>> 0).toString(2).split("");
  let count = 0;
  let max = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      count++;
    } else if (binary[i] === "1") {
      count = 0;
    }
    if (count > max && binary[i + 1] === "1") {
      max = count;
    }
  }
  return max;
}

console.log(solution(N1));
console.log(solution(N2));
console.log(solution(N3));
console.log(solution(N4));
console.log(solution(N5));
console.log(solution(N6));
console.log(solution(N7));
console.log(solution(N8));
console.log(solution(N9));
console.log(solution(N10));
