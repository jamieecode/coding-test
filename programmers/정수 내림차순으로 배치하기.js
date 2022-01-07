// 프로그래머스 > 연습문제 > 정수 내림차순으로 배치하기

function solution(n) {
  let answer = [];
  let string = String(n);

  for (let i = 0; i < string.length; i++) {
    answer.push(string[i]);
  }

  return Number(answer.sort((a, b) => b - a).join(""));
}
