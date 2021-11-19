// 프로그래머스 > 연습문제 > 두 정수 사이의 합

function solution(a, b) {
  let answer = 0;
  let smallestNum = Math.min(a, b);
  let biggestNum = Math.max(a, b);
  for (let i = smallestNum; i <= biggestNum; i++) {
    answer += i;
  }
  return answer;
}

// function solution(a, b) {
//   let array = []
//   let answer = 0
//   array.push(a,b);
//   if (a !== b) array.sort((a,b) => a-b)
//   for(let i = array[0]; i <= array[1];i++) {
//     answer += i
//   } return answer
// }
