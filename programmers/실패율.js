// 프로그래머스 >  2019 KAKAO BLIND RECRUITMENT > 실패율

function solution(N, stages) {
  let answer = []
  let users = stages.length
  for(let i = 1; i <=N;i++) {
    let stageNum = stages.filter(el=>el === i).length
    console.log(stageNum)
    let failRate = 0;
    if(stageNum === 0) {
      failRate = 0
    } else {
      failRate = stageNum / users
      //console.log(failRate)
    }
    users -=stageNum
    answer.push({index:i, rate:failRate})
  }
  
  answer.sort((a,b) => {
    if(a.rate > b.rate) {
      return -1
    } else if (a.rate < b.rate) {
      return 1
    } else {
      if(a.index > b.index) {
        return 1
      } else {
        return -1
      }
    }
  })
  
  return answer.map(el =>  el.index)
}