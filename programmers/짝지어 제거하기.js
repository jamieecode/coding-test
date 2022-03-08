// 프로그래머스 > 2017 팁스타운 > 짝지어 제거하기

function solution(s) {
  const array = [];

  for (let i = 0; i < s.length; i++) {
    if (array[array.length - 1] !== s[i]) {
      array.push(s[i]);
    } else {
      array.pop();
    }
  }

  return array.length ? 0 : 1;
}
