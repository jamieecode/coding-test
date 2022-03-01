// 프로그래머스 > 연습문제 > 2016년

function solution(a, b) {
  let answer = "";
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDays = 0;

  for (let i = 1; i < a; i++) {
    totalDays += month[i - 1];
  }

  answer = days[(totalDays + b - 1) % 7];
  return answer;
}
