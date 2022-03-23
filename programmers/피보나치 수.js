// 프로그래머스 > 연습문제 > 피보나치 수

function solution(n) {
  const memo = {
    0: 0,
    1: 1,
    2: 1,
  };

  if (memo[n]) return memo[n];
  else {
    for (let i = 3; i <= n; i++) {
      memo[i] = (memo[i - 2] + memo[i - 1]) % 1234567;
    }
  }

  return memo[n];
}
