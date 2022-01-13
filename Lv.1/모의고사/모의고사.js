function solution(answers) {
  let answer = [];
  let count = [0,0,0]
  
  const p1 = [1,2,3,4,5];
  const p2 = [2,1,2,3,2,4,2,5];
  const p3 = [3,3,1,1,2,2,4,4,5,5];
  
  
  for(let i = 0; i < answers.length; i++){
      if(answers[i] === p1[i % p1.length]) count[0]++;
      if(answers[i] === p2[i % p2.length]) count[1]++;
      if(answers[i] === p3[i % p3.length]) count[2]++;
  }
  let max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
      if (max === count[i]) answer.push(i + 1)
  }
  return answer;
}