// 프로그래머스 > 연습문제 > 하샤드 수

function solution(x) {
  let string = String(x);
  let answer = 0;

  for (let i = 0; i < string.length; i++) {
    answer += Number(string[i]);
  }

  return x % answer === 0 ? true : false;
}
