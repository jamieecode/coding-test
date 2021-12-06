// 프로그래머스 > 연습문제 > 평균 구하기

function solution(arr) {
  let answer = 0;
  answer = arr.reduce((prev, acc) => prev + acc) / arr.length;
  return answer;
}
