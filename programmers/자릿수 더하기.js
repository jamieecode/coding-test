// 프로그래머스 > 연습문제 > 자릿수 더하기

function solution(n) {
  let answer = 0;
  let stringNum = String(n);
  let result = Array(stringNum);

  return Number(
    result.map((r) => {
      for (let i = 0; i < r.length; i++) {
        answer += parseInt(r[i]);
      }
      return answer;
    })
  );
}
