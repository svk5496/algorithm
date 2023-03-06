function solution(n) {
    const newArr = [...n.toString()]
    console.log(newArr)
    var answer = newArr.map((item)=>item/1).reduce((a,b)=>a+b);
    return answer;
}