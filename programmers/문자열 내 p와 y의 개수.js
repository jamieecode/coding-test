// 프로그래머스 > 연습문제 > 문자열 내 p와 y의 개수

function solution(s) {
  let answer;
  let string = s.toLowerCase();
  let pNum = 0;
  let yNum = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "p") {
      pNum++;
    } else if (string[i] === "y") {
      yNum++;
    }
  }

  pNum === yNum ? (answer = true) : (answer = false);
  return answer;
}
