// 프로그래머스 > 위클리 챌린지 > 부족한 금액 계산하기

function solution(price, money, count) {
  let cost = 0;

  for (let i = 1; i <= count; i++) {
    cost += price * i;
  }
  return cost > money ? cost - money : 0;
}
