function solution(s)
{
    let answer = -1;
    const stack = [];
    for(let i =0; i<s.length; i++){
        if(stack.length<1){
            stack.push(s[i])
        }else{
            if(stack[stack.length-1]===s[i]){
                stack.pop()
            } else{
                stack.push(s[i])
            }
        }
    }
   
    
    return stack.length >0 ? 0: 1;
}