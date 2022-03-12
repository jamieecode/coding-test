// 프로그래머스 > 탐욕법(Greedy) > 큰 수 만들기

function solution(number, k) {
  let answer = [];

  for (var i = 0; i < number.length; i++) {
    while (
      k > 0 &&
      answer.length > 0 &&
      answer[answer.length - 1] < number[i]
    ) {
      answer.pop();
      k--;
    }
    answer.push(number[i]);
  }

  answer.splice(answer.length - k, k);
  return answer.join("");
}
