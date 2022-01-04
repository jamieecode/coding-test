// 프로그래머스 > 연습문제 > 문자열 다루기 기본

function solution(s) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let count = 0;
  if (!(s.length === 4 || s.length === 6)) {
    return false;
  } else {
    numbers.map((num) => {
      for (let i = 0; i < s.length; i++) {
        if (s[i] === num) count++;
      }
      return count;
    });
    if (count !== s.length) return false;
  }
  return true;
}
