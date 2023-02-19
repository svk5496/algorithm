function solution(array) {
    const map = array.map((item,index)=>{
        return {item,index}
    })
    const sort =map.sort((a,b)=>b.item-a.item)
    var answer = [];
    answer.push(sort[0].item)
    answer.push(sort[0].index)
    return answer;
}