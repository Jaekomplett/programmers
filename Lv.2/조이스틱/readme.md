```js
function solution(name) {
    var answer = 0;
    var name = name.split('');
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
                    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
                    'W', 'X', 'Y', 'Z'];
    var alphabetG = alphabet.slice();
    var alphabetB = alphabet.reverse();
    alphabetB.unshift('A');
    
    for(var i = 0; i < name.length; i++){
        //* 현재 알파벳이 'A'가 아닐 때, *//
        if(name[i] != 'A'){
            if(i != 0) answer++;
            var go = alphabetG.indexOf(name[i]);
            var back = alphabetB.indexOf(name[i]);
            go > back ? answer += back : answer += go;
        }
        //* 현재 알파벳이 'A'일 때, *//
        else{
            //* 바꿔야하는 글자가 안남았을 때 *//
            var tmp = name.slice(i, name.length);
            tmp = [...new Set(tmp)];
            if(tmp.join("") == 'A'){
                break;
            }
            
            //* 바꿔야하는 글자가 남았을 때 *//
            var cnt = 0;
            
            //현재 위치에서 맨 뒤로 되돌아가는 횟수
            var bTmp;
            var a = 0;
            if(i > 0){
                // 지금 위치는 A뒤에 커서가 되어 있는거니까
                // 원래 있던 커서 자리로 돌려놓기위함
                a = i - 1;
            }
            if(name[name.length - 1] != 'A'){
                bTmp = 0;
                while(a != 0){
                    bTmp++;
                    a--;
                }
                bTmp++;
            }
            
            //현재 위치에서 원래 방향으로 가는게 빠른지 확인
            for(var j = i; j < name.length; j++){
                if(j != 0) cnt++;
                if(name[j] != 'A'){
                    break;
                }
            }
            // 맨 뒤로 돌아가서 하는게 더 빠를 때,
            if(cnt > bTmp){
                name = name.slice(i,name.length).reverse();
                i = -1;
                answer += bTmp;
            }
            else{
                i = j - 1;
                // 뒤로 돌아가서 'A'아닌 위치에서 하는게 더 빠를 때,
                if(cnt >= Math.ceil(name.length / 2)){
                    cnt = name.length - cnt;
                }
                answer += cnt - 1;
            }
        }
    }
    return answer;
}
```
