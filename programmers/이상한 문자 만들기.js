// 프로그래머스 > 연습문제 > 이상한 문자 만들기

function solution(s) {
  let word = s.split(" ");

  return word
    .map((w) => {
      let string = "";
      for (let i = 0; i < w.length; i++) {
        if (i % 2 === 0) {
          string += w[i].toUpperCase();
        } else {
          string += w[i].toLowerCase();
        }
      }
      return string;
    })
    .join(" ");
}
