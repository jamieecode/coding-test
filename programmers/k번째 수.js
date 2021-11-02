// 프로그래머스 level 1 > 정렬 > K번째 수

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let selectedArray = array.slice(commands[i][0] - 1, commands[i][1]);
    answer.push(selectedArray.sort((a, b) => a - b)[commands[i][2] - 1]);
  }
  return answer;
}
