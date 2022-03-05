// 프로그래머스 > 완전탐색 > 모의고사

function solution(answers) {
  let answer = [];
  const firstMan = "12345".split("");
  const secondMan = "21232425".split("");
  const thirdMan = "3311224455".split("");

  const firstManCount = answers.filter(
    (a, i) => a === Number(firstMan[i % firstMan.length])
  ).length;
  const secondManCount = answers.filter(
    (a, i) => a === Number(secondMan[i % secondMan.length])
  ).length;
  const thirdManCount = answers.filter(
    (a, i) => a === Number(thirdMan[i % thirdMan.length])
  ).length;

  const maxCount = Math.max(firstManCount, secondManCount, thirdManCount);

  if (firstManCount === maxCount) answer.push(1);
  if (secondManCount === maxCount) answer.push(2);
  if (thirdManCount === maxCount) answer.push(3);

  return answer;
}
