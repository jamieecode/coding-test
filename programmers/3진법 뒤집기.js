// 프로그래머스 > 월간 코드 챌린지 시즌 1 > 3진법 뒤집기

function solution(n) {
  let transformedNum = n.toString(3);
  let array = [];
  let answer = [];
  for (let i = 0; i < transformedNum.length; i++) {
    array.push(transformedNum[i]);
  }

  for (let j = 0; j < array.length; j++) {
    answer.push(array[j] * 3 ** [j]);
  }

  return answer.reduce((a, b) => a + b);
}
