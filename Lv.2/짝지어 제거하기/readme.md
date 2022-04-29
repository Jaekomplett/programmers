```js
function solution(a){
    let answer = true;
    let stack = [];

    for(var i=0;i<a.length;i++){
        if(stack.length == 0) {
            stack.push(a[i]);
        }else if(stack[stack.length-1] == a[i]){
            stack.pop();
        } else {
            stack.push(a[i]);
        }
    }

    return stack.length==0 ? 1 : 0;
}
```
