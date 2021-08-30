/**
 * A string S consisting of N characters is considered to be properly nested
 * if any of the following conditions is true:
 *
 * S is empty;
 * S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
 * S has the form "VW" where V and W are properly nested strings.
 *
 * For example, the string "{[()()]}" is properly nested but "([)()]" is not.
 *
 * Write a function:
 *
 * function solution(S);
 *
 * that, given a string S consisting of N characters,
 * returns 1 if S is properly nested and 0 otherwise.
 *
 * For example, given S = "{[()()]}", the function should return 1 and given
 * S = "([)()]", the function should return 0, as explained above.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [0..200,000];
 * string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
 *
 * Copyright 2009–2021 by Codility Limited. All Rights Reserved.
 * Unauthorized copying, publication or disclosure prohibited.
 */

const S1 = "{[()()]}";
const S2 = "([)()]";

function solution(S) {
  let arr = S.split("");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "[" || arr[i] == "{" || arr[i] == "(") stack.push(arr[i]);
    else {
      let last = stack[stack.length - 1];
      if (
        (last === "(" && arr[i] == ")") ||
        (last === "{" && arr[i] == "}") ||
        (last === "[" && arr[i] == "]")
      ) {
        stack.pop();
      } else {
        return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution(S1));
console.log(solution(S2));
