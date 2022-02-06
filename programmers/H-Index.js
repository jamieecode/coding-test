// 프로그래머스 > 정렬 > H-Index

function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => a - b);
  let n = citations.length;

  for (let i = 0; i < n; i++) {
    let h = n - i;
    if (citations[i] >= h) {
      answer = h;
      break;
    }
  }
  return answer;
}
