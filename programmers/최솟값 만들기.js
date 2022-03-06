// 프로그래머스 > 연습문제 > 최솟값 만들기

function solution(A, B) {
  let answer = [];
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer.push(sortedA[i] * sortedB[i]);
  }

  return answer.reduce((a, b) => a + b);
}
