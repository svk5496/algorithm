function solution(n) {
    var answer = Math.sqrt(n);
    
    return answer%1===0?1:2;
}