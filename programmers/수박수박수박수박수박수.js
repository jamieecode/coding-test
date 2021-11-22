// 프로그래머스 > 연습문제 > 수박수박수박수박수박수

function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    i % 2 === 1 ? (answer += "수") : (answer += "박");
  }
  return answer;
}
