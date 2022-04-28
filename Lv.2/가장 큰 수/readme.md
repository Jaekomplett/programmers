```js
function solution(numbers) {
    const answer = numbers
        .sort((a, b) => {
            a = a.toString();
            b = b.toString();
            return (b + a) - (a + b);
        })
        .join('');
     if(answer[0]==='0'){
         return '0';
     }  

    return answer;
}
```
