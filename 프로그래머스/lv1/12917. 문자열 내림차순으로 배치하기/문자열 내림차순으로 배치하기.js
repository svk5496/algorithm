function solution(s) {
    
    let array = [...s]
    let answer = array.sort((a,b)=>{
        if(a>b){
            return -1
        } else if(b>a){
            return 1
        } else return 0
    })
    return answer.join("") ;
}