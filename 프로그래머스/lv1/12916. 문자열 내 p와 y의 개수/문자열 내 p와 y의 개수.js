function solution(s){
    let answer = 0;
    [...s.toLowerCase()].map((letter)=>{
        if(letter ==="p"){
            answer +=1;
        }
        if(letter ==="y"){
            answer -=1;
        }
    })    
    
    return answer===0 ? true : false;
}