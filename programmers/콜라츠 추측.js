// 프로그래머스 > 연습문제 > 콜라츠 추측

function solution(num) {
  let answer = 0;

  while (num !== 1) {
    if (answer > 500) return -1;
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    answer++;
  }

  return answer;
}
