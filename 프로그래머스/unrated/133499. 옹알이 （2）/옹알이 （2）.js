function solution(babbling) {
    var answer = 0;
    const newArr = babbling.map((word)=>{
        return word.replace(/aya/g,1).replace(/ye/g,2).replace(/woo/g,3).replace(/ma/g,4)
    })
    
    newArr.map((number)=>{
        if(!isNaN(number) && !number.includes("11") && !number.includes("22") && !number.includes("33") && !number.includes("44")){
            answer+=1
        }
    })    
    
    return answer;
}