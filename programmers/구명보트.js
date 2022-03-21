// 프로그래머스 > 탐욕법(Greedy) >  구명보트

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] > limit) {
      answer++;
    } else {
      answer++;
      j--;
    }
  }

  return answer;
}
