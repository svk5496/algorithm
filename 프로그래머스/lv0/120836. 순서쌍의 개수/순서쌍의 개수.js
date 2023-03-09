function solution(n) {
    let answerArr = [];
    for(let i =1; i<=n; i++){
        if(n%i===0){
            answerArr.push(i)
        }
    }
    var answer = answerArr.length;
    return answer;
}