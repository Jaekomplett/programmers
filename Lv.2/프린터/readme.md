```js
function solution(priorities, location) {
    let arr = priorities.map((priority, index) => {
        return {
            index, priority
        };
    });

    let queue = [];

    while(arr.length > 0) {
        let firstEle = arr.shift();
        let hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}
```
