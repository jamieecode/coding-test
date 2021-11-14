// 프로그래머스 > 월간 코드 챌린지 시즌3 > 나머지가 1이 되는 수 찾기

function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
}
