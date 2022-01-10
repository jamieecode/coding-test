// 프로그래머스 > 연습문제 > 최댓값과 최솟값

function solution(s) {
  let answer = "";
  let trimmedStr = s.split(" ");
  let maxNum = Math.max(...trimmedStr);
  let minNum = Math.min(...trimmedStr);

  return answer + `${minNum} ${maxNum}`;
}
