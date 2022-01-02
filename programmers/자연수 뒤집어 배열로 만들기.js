// 프로그래머스 > 연습문제 > 자연수 뒤집어 배열로 만들기

function solution(n) {
  let answer = [];
  let string = String(n);

  for (let i = 0; i < string.length; i++) {
    answer.push(Number(string[i]));
  }

  return answer.reverse();
}
