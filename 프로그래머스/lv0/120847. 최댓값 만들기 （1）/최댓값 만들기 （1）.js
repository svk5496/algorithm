function solution(numbers) {
    const sortedArr = numbers.sort((a,b)=>b-a)
    
    var answer = sortedArr[0]*sortedArr[1];
    return answer;
}