function solution(num) {
    let answer = 0;
    for(let i =0; i<501; i++){
        if(num!==1){
            num %2 !==1? num= num/2 : num = num*3+1
            answer+=1
        } else{
            return answer+=0;
        }
        if(i===500){
            answer=-1
        }
    }

    return answer;
}