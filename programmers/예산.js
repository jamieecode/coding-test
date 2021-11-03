// 프로그래머스 level 1 > Summer/Winter Coding > 예산
function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    answer++;
    sum += d[i];
    if (sum > budget) {
      answer--;
      break;
    }
  }
  return answer;
}
