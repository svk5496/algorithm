function solution(s) {
    const queue = [...s];
    let answer = 0;
    let count = queue.length
    while(count>0){
        const stack = [];
        
        for(let i =0; i<queue.length;i++){
            if(queue[i]==="(" || queue[i]==="[" || queue[i]==="{" ){
                stack.push(queue[i])
            } else{
                if(queue[i]===")" && stack[stack.length-1]==="("){
                    stack.pop()
                } else if(queue[i]==="}" && stack[stack.length-1]==="{"){
                    stack.pop()
                } else if(queue[i]==="]" && stack[stack.length-1]==="["){
                    stack.pop()
                } else{
                    stack.push("-1")
                }
            }
        }
        if(stack.length===0){
            answer+=1
        }
        
        const temp = queue.shift()
        queue.push(temp)
        count-=1
    }
    return answer;
}