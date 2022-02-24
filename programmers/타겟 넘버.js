// 프로그래머스 > 깊이/너비 우선 탐색(DFS/BFS) > 타겟넘버

function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);

  function dfs(i, value) {
    if (i < numbers.length) {
      dfs(i + 1, value + numbers[i]);
      dfs(i + 1, value - numbers[i]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }
  return answer;
}
