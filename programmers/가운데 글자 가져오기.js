// 프로그래머스 > 연습문제 > 가운데 글자 가져오기

function solution(s) {
  let middleIndex;
  let answer;
  if (s.length % 2 === 1) {
    middleIndex = Math.floor(s.length / 2);
    answer = s[middleIndex];
  } else {
    middleIndex = s.length / 2;
    answer = s[middleIndex - 1] + s[middleIndex];
  }
  return answer;
}
