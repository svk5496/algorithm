function solution(s) {
    const array = s.split(" ")
    const answerArr = [];
    const sort=array.sort((a,b)=>a-b)
    answerArr.push(sort.shift())
    answerArr.push(sort.pop())
    var answer = answerArr.join(" ");
    return answer;
}