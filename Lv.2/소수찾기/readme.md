```js
function solution(numbers) {
  const answer = []
  validate(numbers.split(""), "0", answer)
  return answer.length
}

function isPrime(number) {
  if (!number || number === 1) return false
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false
  }
  return true
}

function validate(numbers, curr, result) {
  if (isPrime(parseInt(curr))) {
    if (result.indexOf(parseInt(curr)) < 0) result.push(parseInt(curr))
  }
  for (let i = 0; i < numbers.length; i++) {
    const copiedNumbers = [...numbers]
    const removedVal = copiedNumbers.splice(i, 1)[0]
    validate(copiedNumbers, curr + removedVal, result)
  }
}
```
