// 프로그래머스 > 연습문제 > 시저 암호

function solution(s, n) {
  let answer = "";
  const upperCased = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCased = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];
    if (sLetter === " ") {
      answer += " ";
      continue;
    }
    let sArr = upperCased.includes(sLetter) ? upperCased : lowerCased;
    let index = sArr.indexOf(sLetter) + n;
    if (index >= sArr.length) index -= sArr.length;
    answer += sArr[index];
  }
  return answer;
}
