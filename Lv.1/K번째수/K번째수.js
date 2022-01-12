// solution. 1
function solution(array, commands) {
  var answer = [];
  for(let i = 0; i < commands.length; i++){
      let arr = array.slice(commands[i][0]-1, commands[i][1])
      arr.sort((a,b)=> a-b)
      answer.push(arr[commands[i][2]-1]);
  }
  return answer;
}

// solution. 2
function solution(array, commands) {
  return commands.map(command => {
      const [sPosition, ePosition, position] = command
      const newArray = array
          .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
          .sort((a,b) => a - b)    

      return newArray[position - 1]
  })
}
