// 프로그래머스 level 1 > 월간 코드 챌린지 시즌3 > 없는 숫자 더하기

function solution(numbers) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const filteredNums = arr.filter((el) => numbers.indexOf(el) === -1);
  const addFilteredNums = filteredNums.reduce((prev, curr) => prev + curr);
  return addFilteredNums;
}
