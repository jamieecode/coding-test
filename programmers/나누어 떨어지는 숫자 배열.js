// 프로그래머스 > 연습문제 > 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  let answer = arr.filter((num) => num % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// function solution(arr, divisor) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % divisor === 0) {
//       answer.push(arr[i]);
//     }
//   }
//   if (answer.length === 0) return [-1];
//   return answer.sort((a, b) => a - b);
// }
