// 프로그래머스 > 월간 코드 챌린지 시즌1 > 두 개 뽑아서 더하기
function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (i < j) result.push(sum);
    }
  }

  result.sort((a, b) => a - b);
  return Array.from(new Set(result));
}
