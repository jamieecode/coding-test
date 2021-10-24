// 프로그래머스 level 1 > 월간 코드 챌린지 시즌2 > 음양더하기

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      answer -= absolutes[i];
    } else {
      answer += absolutes[i];
    }
  }
  return answer;
}

// forEach를 사용한 풀이
function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((value, i) => {
    if (signs[i]) {
      answer += value;
    } else {
      answer -= value;
    }
  });
  return answer;
}
