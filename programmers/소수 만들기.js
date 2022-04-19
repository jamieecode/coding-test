// 프로그래머스 > Summer/Winter Coding(~2018) > 소수 만들기

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

function solution(nums) {
  let answer = 0;

  // 3개 수 더하고, 더한 값이 소수인지 판별
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        isPrime(nums[i] + nums[j] + nums[k]) && answer++;
      }
    }
  }
  return answer;
}
