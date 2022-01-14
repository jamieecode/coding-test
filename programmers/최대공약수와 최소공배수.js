// 프로그래머스 > 연습문제 > 최대공약수와 최소공배수

function solution(n,m) {
  let answer = [];
  
  const greatest = (a,b) => {
    if(b === 0) return a
    return greatest(b, a % b)
  }
  
  const least = (a,b) => (a*b) / greatest(a,b)
  
  answer.push(greatest(n,m), least(n,m))
  return answer

}