function solution(rsp) {
    const arr = [...rsp]
    var answer = arr.map((number)=>{
        if(number ==="2"){
            return "0"
        }
        if(number ==="5"){
            return "2"
        }
        if(number ==="0"){
            return "5"
        }
    })
    console.log(answer)
    
    return answer.join("");
}