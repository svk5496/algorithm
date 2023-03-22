function solution(my_string) {
    const strArr = [...my_string]
    const numberArr = strArr.filter(item=>!isNaN(item))
    
    var answer = numberArr.reduce((a,b)=>a/1+b/1);
    return answer;
}