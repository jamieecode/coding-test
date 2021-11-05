// 프로그래머스 > 월간 코드 챌린지 시즌2 >  약수의 개수와 덧셈

function solution(left, right) {
  let arr=[]
  let answer = 0

    for(let i = left; i <=right;i++) {
      for(let j = 1; j <= i; j++) {
         if(i % j === 0) {
           arr.push(i)
         } 
      }

      let numOfYaksu = arr.filter(el=>el === i).length
      if(numOfYaksu % 2 === 0) {
        answer+=i
      } else  {
        answer -= i
      }
    } return answer
}