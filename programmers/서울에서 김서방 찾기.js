// 프로그래머스 > 연습문제 > 서울에서 김서방 찾기

function solution(seoul) {
  let answer = "";
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i].includes("Kim")) answer = i;
  }
  return `김서방은 ${answer}에 있다.`;
}

// for문 대신 indexOf, findIndex도 사용 가능!!
