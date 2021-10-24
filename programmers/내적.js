// 프로그래머스 level 1 > 월간 코드 챌린지 시즌1 > 내적

function solution(a, b) {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}
