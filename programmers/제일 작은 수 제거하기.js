// 프로그래머스 > 연습문제 > 제일 작은 수 제거하기

function solution(arr) {
  if (arr.length <= 1) return [-1];
  else {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }
      return arr.filter((num) => num !== arr[minIndex]);
    }
  }
}
