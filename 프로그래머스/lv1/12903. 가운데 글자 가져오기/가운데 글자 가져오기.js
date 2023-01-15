function solution(s) {
    const array = [...s]
    const index = Math.floor(s.length/2)
    var answer = s.length%2===0? array.splice(index-1,2).join("") : array.splice(index,1).join("") ;
    return answer;
}