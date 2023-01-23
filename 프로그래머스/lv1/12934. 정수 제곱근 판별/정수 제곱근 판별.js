function solution(n) {
    var answer = 0;
    Math.sqrt(n)%1!==0 ? answer = -1 : answer= Math.pow(Math.sqrt(n)+1,2)
    return answer;
}