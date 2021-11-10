// 프로그래머스 > 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어

function solution(s) {
  let answer = s;
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numbers.length; i++) {
    let tempArr = answer.split(numbers[i]);
    answer = tempArr.join(i);
  }
  return Number(answer);
}
